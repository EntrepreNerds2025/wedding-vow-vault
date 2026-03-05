import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_OPTIONS = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM",
];

const CRM_URL = "https://oyjbpxdcazamsdtrrmey.supabase.co/functions/v1/receive-dream-streams-inquiry";
const CRM_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95amJweGRjYXphbXNkdHJybWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyMjM0MTgsImV4cCI6MjA4Nzc5OTQxOH0.n-j0RqwqckV3kisVL-JnjDx84AEOGUKY6SWxnLFUjmE";

const HOW_HEARD_OPTIONS_WEDDING = [
  "Google Search",
  "Social Media",
  "Referral",
  "Church/Place of Worship",
  "Other",
];

const HOW_HEARD_OPTIONS_FUNERAL = [
  "Google Search",
  "Social Media",
  "Referral",
  "Funeral Home",
  "Church/Place of Worship",
  "Other",
];

const WEDDING_ADDONS = [
  "Dream Story",
  "Dream Thank You",
  "Wedding Highlight Film",
  "Social Media Highlight",
  "Additional 1+ Hour",
  "Reception",
  "Zoom TV Monitor",
  "Drone Operator",
  "None",
];

// Schemas
const funeralSchema = z.object({
  full_name: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  event_date: z.string().optional(),
  start_time: z.string().trim().min(1, "Start time is required").max(50),
  location: z.string().trim().max(200).optional(),
  how_heard: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

const weddingSchema = z.object({
  bride_name: z.string().trim().min(1, "Bride's name is required").max(100),
  groom_name: z.string().trim().min(1, "Groom's name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  wedding_date: z.string().optional(),
  ceremony_time: z.string().trim().min(1, "Ceremony time is required").max(50),
  venue_address: z.string().trim().max(300).optional(),
  package_interest: z.string().optional(),
  add_ons: z.array(z.string()).optional(),
  internet_situation: z.string().optional(),
  how_heard: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

type FuneralFormData = z.infer<typeof funeralSchema>;
type WeddingFormData = z.infer<typeof weddingSchema>;

const inputClass = "border-0 border-b-2 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent font-body placeholder:text-muted-foreground/50";
const labelClass = "font-body text-sm text-muted-foreground uppercase tracking-wider";

const serviceConfig = {
  funerals: { label: "Funeral", subtitle: "WE WOULD LOVE TO HELP HONOR YOUR LOVED ONE" },
  weddings: { label: "Wedding", subtitle: "WE WOULD LOVE TO CAPTURE YOUR WEDDING STORY" },
  other: { label: "Other", subtitle: "WE WOULD LOVE TO HEAR ABOUT YOUR PROJECT" },
} as const;

type ServiceType = keyof typeof serviceConfig;

async function submitToCRM(inquiryType: string, data: Record<string, unknown>) {
  const response = await fetch(CRM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: CRM_API_KEY,
    },
    body: JSON.stringify({ inquiry_type: inquiryType, ...data }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to submit inquiry");
  }
  return response.json();
}

// ── Funeral / Other Form ──
function FuneralForm({ inquiryType }: { inquiryType: "funeral" | "other" }) {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FuneralFormData>({
    resolver: zodResolver(funeralSchema),
  });

  const onSubmit = async (data: FuneralFormData) => {
    setSubmitting(true);
    try {
      const nameParts = data.full_name.trim().split(/\s+/);
      const payload = {
        ...data,
        first_name: nameParts[0],
        last_name: nameParts.slice(1).join(" ") || nameParts[0],
      };
      await submitToCRM(inquiryType, payload);
      const description = inquiryType === "funeral"
        ? "We'll be in touch soon to help honor your loved one."
        : "We'll be in touch soon about your project.";
      toast({ title: "Inquiry sent!", description });
      reset();
    } catch (e: any) {
      toast({ title: "Something went wrong", description: e.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-2">
          <Label className={labelClass}>Full Name *</Label>
          <Input {...register("full_name")} placeholder="Full Name" className={inputClass} />
          {errors.full_name && <p className="text-sm text-destructive">{errors.full_name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Email *</Label>
          <Input {...register("email")} type="email" placeholder="Email" className={inputClass} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Phone *</Label>
          <Input {...register("phone")} placeholder="Phone" className={inputClass} />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>{inquiryType === "funeral" ? "Event Date" : "Project Date"}</Label>
          <Controller
            name="event_date"
            control={control}
            render={({ field }) => {
              const dateValue = field.value ? new Date(field.value) : undefined;
              return (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(inputClass, "w-full justify-start text-left font-normal", !field.value && "text-muted-foreground/50")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? format(new Date(field.value), "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dateValue}
                      onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              );
            }}
          />
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Start Time</Label>
          <Controller
            name="start_time"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select time..." />
                </SelectTrigger>
                <SelectContent>
                  {TIME_OPTIONS.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Location</Label>
          <Input {...register("location")} placeholder="City, Venue" className={inputClass} />
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>How did you hear about us?</Label>
          <Controller
            name="how_heard"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {HOW_HEARD_OPTIONS_FUNERAL.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label className={labelClass}>Tell me more about {inquiryType === "funeral" ? "this project" : "your project"}</Label>
        <Textarea {...register("message")} placeholder="Share any details..." className={`${inputClass} min-h-[100px]`} />
      </div>
      <Button
        type="submit"
        disabled={submitting}
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-body px-10"
      >
        {submitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}

// ── Wedding Form ──
function WeddingForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, control, reset, formState: { errors }, watch, setValue } = useForm<WeddingFormData>({
    resolver: zodResolver(weddingSchema),
    defaultValues: { add_ons: [] },
  });

  const addOns = watch("add_ons") || [];

  const toggleAddon = (addon: string) => {
    if (addon === "None") {
      setValue("add_ons", ["None"]);
      return;
    }
    const current = addOns.filter((a) => a !== "None");
    if (current.includes(addon)) {
      setValue("add_ons", current.filter((a) => a !== addon));
    } else {
      setValue("add_ons", [...current, addon]);
    }
  };

  const onSubmit = async (data: WeddingFormData) => {
    setSubmitting(true);
    try {
      const payload = {
        ...data,
        first_name: data.bride_name,
        last_name: data.groom_name,
      };
      await submitToCRM("wedding", payload);
      toast({ title: "Inquiry sent!", description: "We'll be in touch soon about your big day!" });
      reset();
    } catch (e: any) {
      toast({ title: "Something went wrong", description: e.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-2">
          <Label className={labelClass}>Name of Bride *</Label>
          <Input {...register("bride_name")} placeholder="Bride's Name" className={inputClass} />
          {errors.bride_name && <p className="text-sm text-destructive">{errors.bride_name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Name of Groom *</Label>
          <Input {...register("groom_name")} placeholder="Groom's Name" className={inputClass} />
          {errors.groom_name && <p className="text-sm text-destructive">{errors.groom_name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Email *</Label>
          <Input {...register("email")} type="email" placeholder="Email" className={inputClass} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Phone *</Label>
          <Input {...register("phone")} placeholder="Phone" className={inputClass} />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Wedding Date</Label>
          <Controller
            name="wedding_date"
            control={control}
            render={({ field }) => {
              const dateValue = field.value ? new Date(field.value) : undefined;
              return (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(inputClass, "w-full justify-start text-left font-normal", !field.value && "text-muted-foreground/50")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? format(new Date(field.value), "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dateValue}
                      onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              );
            }}
          />
        </div>
        <div className="space-y-2">
          <Label className={labelClass}>Ceremony Time</Label>
          <Controller
            name="ceremony_time"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select time..." />
                </SelectTrigger>
                <SelectContent>
                  {TIME_OPTIONS.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <Label className={labelClass}>Venue Address</Label>
          <Input {...register("venue_address")} placeholder="Full venue address" className={inputClass} />
        </div>
      </div>

      {/* Package Interest */}
      <div className="space-y-3">
        <Label className={labelClass}>Package Interest</Label>
        <Controller
          name="package_interest"
          control={control}
          render={({ field }) => (
            <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-wrap gap-6">
              {["Bronze", "Silver", "Gold"].map((pkg) => (
                <div key={pkg} className="flex items-center gap-2">
                  <RadioGroupItem value={pkg} id={`pkg-${pkg}`} />
                  <Label htmlFor={`pkg-${pkg}`} className="font-body cursor-pointer">{pkg}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
      </div>

      {/* Add-ons */}
      <div className="space-y-3">
        <Label className={labelClass}>Add-ons</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {WEDDING_ADDONS.map((addon) => (
            <div key={addon} className="flex items-center gap-2">
              <Checkbox
                checked={addOns.includes(addon)}
                onCheckedChange={() => toggleAddon(addon)}
                id={`addon-${addon}`}
              />
              <Label htmlFor={`addon-${addon}`} className="font-body text-sm cursor-pointer">{addon}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Internet Situation */}
      <div className="space-y-3">
        <Label className={labelClass}>Internet Connectivity at Venue</Label>
        <Controller
          name="internet_situation"
          control={control}
          render={({ field }) => (
            <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-wrap gap-6">
              {["Venue has WiFi", "No WiFi available", "Not sure"].map((opt) => (
                <div key={opt} className="flex items-center gap-2">
                  <RadioGroupItem value={opt} id={`internet-${opt}`} />
                  <Label htmlFor={`internet-${opt}`} className="font-body text-sm cursor-pointer">{opt}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-2">
          <Label className={labelClass}>How did you hear about us?</Label>
          <Controller
            name="how_heard"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {HOW_HEARD_OPTIONS_WEDDING.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className={labelClass}>Tell me more about your special day</Label>
        <Textarea {...register("message")} placeholder="Share any details about your wedding..." className={`${inputClass} min-h-[100px]`} />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-body px-10"
      >
        {submitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}

// ── Main Contact Page ──
const Contact = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const navigate = useNavigate();
  const currentType = (
    serviceType && serviceType in serviceConfig ? serviceType : "weddings"
  ) as ServiceType;
  const config = serviceConfig[currentType];

  return (
    <>
      <Helmet>
        <title>Contact Us | Dream Streams</title>
        <meta name="description" content="Get in touch with Dream Streams for wedding, funeral, or event livestreaming inquiries." />
        <link rel="canonical" href={`https://dreamstreams.ca/contact/${currentType}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Decorative blobs */}
            <div
              className="absolute top-10 right-0 w-64 h-64 bg-accent/15 hidden md:block"
              style={{ borderRadius: "50% 30% 60% 40% / 40% 60% 30% 50%" }}
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 hidden md:block"
              style={{ borderRadius: "40% 60% 30% 50% / 50% 30% 60% 40%" }}
            />
            <div
              className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/5 hidden lg:block"
              style={{ borderRadius: "60% 40% 50% 30% / 30% 50% 40% 60%" }}
            />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                  <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">
                    lets chat.
                  </h1>
                  <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground">
                    {config.subtitle}
                  </p>
                </div>

                {/* Service Type Selector */}
                <div className="flex justify-center mb-12">
                  <Select
                    value={currentType}
                    onValueChange={(val) => navigate(`/contact/${val}`)}
                  >
                    <SelectTrigger className="w-[240px] border-2 border-accent bg-transparent font-body text-center">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weddings">Wedding Inquiry</SelectItem>
                      <SelectItem value="funerals">Funeral Inquiry</SelectItem>
                      <SelectItem value="other">Other Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Form */}
                {currentType === "weddings" ? (
                  <WeddingForm />
                ) : (
                  <FuneralForm inquiryType={currentType === "funerals" ? "funeral" : "other"} />
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
