import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  Zap,
  Clock,
  CreditCard,
  Shield,
  Camera,
  Upload,
  CheckCircle,
  AlertCircle,
  Building,
  TreePine,
  MoreHorizontal
} from "lucide-react";
import { toast } from "sonner";

// Validation schema
const hostRegistrationSchema = z.object({
  // Personal Information
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),

  email: z.string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters"),

  phoneNumber: z.string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),

  aadhaarNumber: z.string()
    .regex(/^\d{12}$/, "Aadhaar number must be exactly 12 digits"),

  panNumber: z.string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please enter a valid PAN number (e.g., ABCDE1234F)"),

  dateOfBirth: z.string()
    .min(1, "Date of birth is required"),

  // Address Information
  address: z.string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be less than 200 characters"),

  city: z.string()
    .min(2, "City must be at least 2 characters")
    .max(30, "City must be less than 30 characters"),

  state: z.string()
    .min(1, "Please select a state"),

  pincode: z.string()
    .regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),

  // Property Information
  propertyType: z.enum(["residential", "commercial", "farmhouse", "other"], {
    required_error: "Please select property type",
  }),

  propertyOwnership: z.enum(["owned", "rented", "family"], {
    required_error: "Please select property ownership",
  }),

  parkingType: z.enum(["covered", "open", "both"], {
    required_error: "Please select parking type",
  }),

  // Charging Setup
  chargerType: z.array(z.string()).min(1, "Please select at least one charger type"),

  chargingCapacity: z.string()
    .min(1, "Please select charging capacity"),

  connectorTypes: z.array(z.string()).min(1, "Please select at least one connector type"),

  powerSource: z.enum(["grid", "solar", "hybrid"], {
    required_error: "Please select power source",
  }),

  // Availability & Pricing
  availability: z.array(z.string()).min(1, "Please select at least one availability slot"),

  pricePerUnit: z.string()
    .regex(/^\d+(\.\d{1,2})?$/, "Please enter a valid price (e.g., 5.50)")
    .refine((val) => parseFloat(val) >= 3 && parseFloat(val) <= 15, {
      message: "Price should be between ₹3 and ₹15 per unit",
    }),

  // Additional Information
  experience: z.enum(["beginner", "intermediate", "experienced"], {
    required_error: "Please select your experience level",
  }),

  additionalFacilities: z.array(z.string()),

  description: z.string()
    .max(500, "Description must be less than 500 characters")
    .optional(),

  // Terms and Conditions
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),

  agreeBackground: z.boolean().refine((val) => val === true, {
    message: "You must agree to the background verification",
  }),
});

type HostRegistrationForm = z.infer<typeof hostRegistrationSchema>;

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal"
];

const HostRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<HostRegistrationForm>({
    resolver: zodResolver(hostRegistrationSchema),
    defaultValues: {
      chargerType: [],
      connectorTypes: [],
      availability: [],
      additionalFacilities: [],
      agreeTerms: false,
      agreeBackground: false,
    },
  });

  const steps = [
    {
      title: "Personal Information",
      description: "Basic details and identification",
      icon: User,
      fields: ["fullName", "email", "phoneNumber", "aadhaarNumber", "panNumber", "dateOfBirth"]
    },
    {
      title: "Address Details",
      description: "Your location information",
      icon: MapPin,
      fields: ["address", "city", "state", "pincode"]
    },
    {
      title: "Property Information",
      description: "Details about your property",
      icon: Home,
      fields: ["propertyType", "propertyOwnership", "parkingType"]
    },
    {
      title: "Charging Setup",
      description: "Your EV charging infrastructure",
      icon: Zap,
      fields: ["chargerType", "chargingCapacity", "connectorTypes", "powerSource"]
    },
    {
      title: "Availability & Pricing",
      description: "When and how much you charge",
      icon: Clock,
      fields: ["availability", "pricePerUnit", "experience", "additionalFacilities", "description"]
    },
    {
      title: "Review & Submit",
      description: "Verify your information",
      icon: CheckCircle,
      fields: ["agreeTerms", "agreeBackground"]
    }
  ];

  const onSubmit = async (data: HostRegistrationForm) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log("Host Registration Data:", data);

      toast.success("Registration submitted successfully! We'll review your application within 24 hours.", {
        duration: 5000,
      });

      // Reset form or redirect
      form.reset();
      setCurrentStep(0);

    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateCurrentStep = async () => {
    const currentFields = steps[currentStep].fields;
    const isValid = await form.trigger(currentFields as any);
    return isValid;
  };

  const nextStep = async () => {
    if (currentStep < steps.length - 1) {
      const isValid = await validateCurrentStep();
      if (isValid) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStep) return "completed";
    if (stepIndex === currentStep) return "current";
    return "upcoming";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-12 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Host Registration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join as a Charging Host
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help EV drivers charge their vehicles while earning extra income from your property
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 overflow-x-hidden">
          <div className="flex items-center justify-between mb-4 relative">
            {steps.map((step, index) => {
              const status = getStepStatus(index);
              const StepIcon = step.icon;

              return (
                <div key={index} className="flex-1 flex flex-col items-center relative max-w-[16.66%]">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    status === "completed"
                      ? "bg-primary text-white"
                      : status === "current"
                      ? "bg-primary text-white ring-2 sm:ring-4 ring-primary/20"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {status === "completed" ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <StepIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                  <div className="text-center hidden md:block">
                    <p className={`text-xs sm:text-sm font-medium ${
                      status === "current" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {step.title}
                    </p>
                  </div>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className={`absolute left-1/2 top-4 sm:top-5 w-full h-0.5 -translate-y-1/2 -z-10 ${
                      index < currentStep ? "bg-primary" : "bg-muted"
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <Card className="shadow-elegant w-full max-w-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {(() => {
                const StepIcon = steps[currentStep].icon;
                return <StepIcon className="w-5 h-5 text-primary" />;
              })()}
              {steps[currentStep].title}
            </CardTitle>
            <p className="text-muted-foreground">{steps[currentStep].description}</p>
          </CardHeader>

          <CardContent className="overflow-x-hidden">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Step Content */}
                {currentStep === 0 && (
                  <PersonalInformationStep form={form} />
                )}
                {currentStep === 1 && (
                  <AddressDetailsStep form={form} states={indianStates} />
                )}
                {currentStep === 2 && (
                  <PropertyInformationStep form={form} />
                )}
                {currentStep === 3 && (
                  <ChargingSetupStep form={form} />
                )}
                {currentStep === 4 && (
                  <AvailabilityPricingStep form={form} />
                )}
                {currentStep === 5 && (
                  <ReviewSubmitStep form={form} />
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                  >
                    Previous
                  </Button>

                  {currentStep < steps.length - 1 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      variant="hero"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="hero"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Step Components
const PersonalInformationStep = ({ form }: { form: any }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
    <FormField
      control={form.control}
      name="fullName"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name *
          </FormLabel>
          <FormControl>
            <Input placeholder="Enter your full name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email Address *
          </FormLabel>
          <FormControl>
            <Input type="email" placeholder="Enter your email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="phoneNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Mobile Number *
          </FormLabel>
          <FormControl>
            <Input placeholder="Enter 10-digit mobile number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="dateOfBirth"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Date of Birth *</FormLabel>
          <FormControl>
            <Input type="date" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="aadhaarNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Aadhaar Number *</FormLabel>
          <FormControl>
            <Input placeholder="Enter 12-digit Aadhaar number" {...field} />
          </FormControl>
          <FormDescription>
            This will be used for identity verification
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="panNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel>PAN Number *</FormLabel>
          <FormControl>
            <Input placeholder="Enter PAN number (e.g., ABCDE1234F)" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);

const AddressDetailsStep = ({ form, states }: { form: any; states: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
    <div className="md:col-span-2">
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Complete Address *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter your complete address with landmarks"
                rows={3}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <FormField
      control={form.control}
      name="city"
      render={({ field }) => (
        <FormItem>
          <FormLabel>City *</FormLabel>
          <FormControl>
            <Input placeholder="Enter your city" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="state"
      render={({ field }) => (
        <FormItem>
          <FormLabel>State *</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select your state" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="pincode"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Pincode *</FormLabel>
          <FormControl>
            <Input placeholder="Enter 6-digit pincode" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);

const PropertyInformationStep = ({ form }: { form: any }) => (
  <div className="space-y-6 w-full overflow-x-hidden">
    <FormField
      control={form.control}
      name="propertyType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Property Type *</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {[
                { value: "residential", label: "Residential", icon: Home },
                { value: "commercial", label: "Commercial", icon: Building },
                { value: "farmhouse", label: "Farmhouse", icon: TreePine },
                { value: "other", label: "Other", icon: MoreHorizontal }
              ].map((type) => (
                <div key={type.value}>
                  <RadioGroupItem value={type.value} id={type.value} className="sr-only" />
                  <Label
                    htmlFor={type.value}
                    className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-primary ${
                      field.value === type.value ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <type.icon className="w-6 h-6 mb-2" />
                    {type.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="propertyOwnership"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Property Ownership *</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              {[
                { value: "owned", label: "I own this property" },
                { value: "rented", label: "I rent this property" },
                { value: "family", label: "Family owned" }
              ].map((option) => (
                <div key={option.value}>
                  <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                  <Label
                    htmlFor={option.value}
                    className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all text-center ${
                      field.value === option.value ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="parkingType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Parking Type *</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              {[
                { value: "covered", label: "Covered Parking" },
                { value: "open", label: "Open Parking" },
                { value: "both", label: "Both Available" }
              ].map((option) => (
                <div key={option.value}>
                  <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                  <Label
                    htmlFor={option.value}
                    className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all text-center ${
                      field.value === option.value ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);

const ChargingSetupStep = ({ form }: { form: any }) => (
  <div className="space-y-6 w-full overflow-x-hidden">
    <FormField
      control={form.control}
      name="chargerType"
      render={() => (
        <FormItem>
          <FormLabel>Charger Type * (Select all that apply)</FormLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { id: "ac-slow", label: "AC Slow (3.3kW)" },
              { id: "ac-fast", label: "AC Fast (7.4kW)" },
              { id: "ac-rapid", label: "AC Rapid (22kW)" },
              { id: "dc-fast", label: "DC Fast (50kW)" },
              { id: "dc-ultra", label: "DC Ultra Fast (150kW+)" },
              { id: "portable", label: "Portable Charger" }
            ].map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name="chargerType"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(field.value?.filter((value: string) => value !== item.id))
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      <FormField
        control={form.control}
        name="chargingCapacity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Maximum Charging Capacity *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select capacity" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="3.3kw">Up to 3.3kW</SelectItem>
                <SelectItem value="7.4kw">Up to 7.4kW</SelectItem>
                <SelectItem value="22kw">Up to 22kW</SelectItem>
                <SelectItem value="50kw">Up to 50kW</SelectItem>
                <SelectItem value="150kw">150kW+</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="powerSource"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Power Source *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select power source" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="grid">Grid Power</SelectItem>
                <SelectItem value="solar">Solar Power</SelectItem>
                <SelectItem value="hybrid">Hybrid (Grid + Solar)</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <FormField
      control={form.control}
      name="connectorTypes"
      render={() => (
        <FormItem>
          <FormLabel>Connector Types * (Select all available)</FormLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { id: "type2", label: "Type 2 (AC)" },
              { id: "ccs2", label: "CCS2 (DC)" },
              { id: "chademo", label: "CHAdeMO" },
              { id: "bharat-ac", label: "Bharat AC" },
              { id: "bharat-dc", label: "Bharat DC" },
              { id: "3-pin", label: "3-Pin Socket" }
            ].map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name="connectorTypes"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(field.value?.filter((value: string) => value !== item.id))
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-sm">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);

const AvailabilityPricingStep = ({ form }: { form: any }) => (
  <div className="space-y-6 w-full overflow-x-hidden">
    <FormField
      control={form.control}
      name="availability"
      render={() => (
        <FormItem>
          <FormLabel>Availability * (Select all applicable time slots)</FormLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { id: "early-morning", label: "Early Morning (5AM-8AM)" },
              { id: "morning", label: "Morning (8AM-12PM)" },
              { id: "afternoon", label: "Afternoon (12PM-5PM)" },
              { id: "evening", label: "Evening (5PM-9PM)" },
              { id: "night", label: "Night (9PM-12AM)" },
              { id: "late-night", label: "Late Night (12AM-5AM)" }
            ].map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(field.value?.filter((value: string) => value !== item.id))
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-sm">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      <FormField
        control={form.control}
        name="pricePerUnit"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Price per Unit (₹/kWh) *
            </FormLabel>
            <FormControl>
              <Input
                type="number"
                step="0.50"
                min="3"
                max="15"
                placeholder="e.g., 5.50"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Recommended range: ₹3-₹8 per unit (Home rates)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="experience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Experience Level *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="beginner">New to EV hosting</SelectItem>
                <SelectItem value="intermediate">Some experience</SelectItem>
                <SelectItem value="experienced">Very experienced</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <FormField
      control={form.control}
      name="additionalFacilities"
      render={() => (
        <FormItem>
          <FormLabel>Additional Facilities (Optional)</FormLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { id: "wifi", label: "Free WiFi" },
              { id: "restroom", label: "Restroom" },
              { id: "refreshments", label: "Refreshments" },
              { id: "waiting-area", label: "Waiting Area" },
              { id: "security", label: "Security/CCTV" },
              { id: "shade", label: "Shaded Parking" }
            ].map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name="additionalFacilities"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(field.value?.filter((value: string) => value !== item.id))
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-sm">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Additional Information (Optional)</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us more about your charging setup, special instructions, or any other relevant information..."
              rows={4}
              {...field}
            />
          </FormControl>
          <FormDescription>
            Max 500 characters
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);

const ReviewSubmitStep = ({ form }: { form: any }) => {
  const watchedValues = form.watch();

  return (
    <div className="space-y-6 w-full overflow-x-hidden">
      {/* Review Summary */}
      <div className="bg-muted/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Application Summary
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm w-full">
          <div>
            <h4 className="font-medium mb-2">Personal Information</h4>
            <p><strong>Name:</strong> {watchedValues.fullName}</p>
            <p><strong>Email:</strong> {watchedValues.email}</p>
            <p><strong>Phone:</strong> {watchedValues.phoneNumber}</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Location</h4>
            <p><strong>City:</strong> {watchedValues.city}</p>
            <p><strong>State:</strong> {watchedValues.state}</p>
            <p><strong>Pincode:</strong> {watchedValues.pincode}</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Property Details</h4>
            <p><strong>Type:</strong> {watchedValues.propertyType}</p>
            <p><strong>Ownership:</strong> {watchedValues.propertyOwnership}</p>
            <p><strong>Parking:</strong> {watchedValues.parkingType}</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Charging Setup</h4>
            <p><strong>Capacity:</strong> {watchedValues.chargingCapacity}</p>
            <p><strong>Price:</strong> ₹{watchedValues.pricePerUnit}/kWh</p>
            <p><strong>Power:</strong> {watchedValues.powerSource}</p>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="agreeTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the Terms and Conditions *
                </FormLabel>
                <FormDescription>
                  I agree to ChargingMitra's terms of service, privacy policy, and host agreement.
                  I understand the responsibilities of being a charging host.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreeBackground"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I consent to background verification *
                </FormLabel>
                <FormDescription>
                  I consent to Aadhaar verification, PAN verification, and background checks
                  as required for host approval and safety purposes.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
      </div>

      {/* Next Steps Info */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <h4 className="font-medium mb-2 flex items-center gap-2 text-primary">
          <CheckCircle className="w-4 h-4" />
          What happens next?
        </h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• We'll review your application within 24 hours</li>
          <li>• Our team will verify your documents and setup</li>
          <li>• You'll receive approval confirmation via email and SMS</li>
          <li>• Start earning by hosting EV drivers!</li>
        </ul>
      </div>
    </div>
  );
};

export default HostRegistrationForm;