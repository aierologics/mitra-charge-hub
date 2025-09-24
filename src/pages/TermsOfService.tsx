import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Scale, Users, Shield, CreditCard, AlertTriangle, Phone, Mail, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-secondary/10 rounded-full px-4 py-2 mb-6">
                <FileText className="w-4 h-4 text-secondary mr-2" />
                <span className="text-sm font-medium text-secondary">Legal Agreement</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Please read these terms carefully before using ChargingMitra's services
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> December 15, 2024 | <strong>Effective Date:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Introduction */}
              <Card className="mb-12 border-l-4 border-l-secondary">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Scale className="w-6 h-6 text-secondary" />
                    Agreement Overview
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      These Terms of Service ("Terms") constitute a legally binding agreement between you and ChargingMitra Technologies Private Limited ("ChargingMitra," "Company," "we," "us," or "our") governing your access to and use of the ChargingMitra platform, mobile applications, website, and related services (collectively, the "Services").
                    </p>
                    <p>
                      By accessing or using our Services, creating an account, or clicking "I Agree," you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-12">

                {/* Definitions */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <FileText className="w-7 h-7 text-secondary" />
                    1. Definitions
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">"Driver"</h4>
                        <p className="text-sm text-muted-foreground">A user who books charging services through our platform</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">"Host"</h4>
                        <p className="text-sm text-muted-foreground">A user who provides charging services through our platform</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">"Charging Session"</h4>
                        <p className="text-sm text-muted-foreground">The period during which an EV is connected to a charging point</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">"Platform"</h4>
                        <p className="text-sm text-muted-foreground">ChargingMitra's technology platform including apps and website</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">"Content"</h4>
                        <p className="text-sm text-muted-foreground">All information, data, text, images, and materials on our platform</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">"Account"</h4>
                        <p className="text-sm text-muted-foreground">Your registered user account on our platform</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Account Registration */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Users className="w-7 h-7 text-primary" />
                    2. Account Registration and Eligibility
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Eligibility Requirements</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>You must be at least 18 years old to use our Services</li>
                        <li>You must be a legal resident of India with valid identification</li>
                        <li>You must have the legal capacity to enter into this agreement</li>
                        <li>You must not be prohibited from using our Services under Indian law</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Account Information</h3>
                      <p className="text-muted-foreground mb-3">You agree to:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Provide accurate, current, and complete information during registration</li>
                        <li>Maintain and update your account information</li>
                        <li>Keep your login credentials confidential and secure</li>
                        <li>Notify us immediately of any unauthorized use of your account</li>
                        <li>Accept responsibility for all activities under your account</li>
                      </ul>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Providing false information or impersonating others may result in immediate account termination.
                      </AlertDescription>
                    </Alert>
                  </div>
                </section>

                {/* Service Description */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Shield className="w-7 h-7 text-accent" />
                    3. Service Description
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Platform Services</h3>
                      <p className="text-muted-foreground mb-3">ChargingMitra provides:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="border-l-4 border-l-primary">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground mb-2">For Drivers</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Search and discovery of charging points</li>
                              <li>• Booking and payment processing</li>
                              <li>• Navigation and route planning</li>
                              <li>• Real-time availability updates</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground mb-2">For Hosts</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Listing and management tools</li>
                              <li>• Booking management system</li>
                              <li>• Payment processing and payouts</li>
                              <li>• Communication with drivers</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Service Limitations</h3>
                      <p className="text-muted-foreground mb-3">Please note that:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>ChargingMitra is a technology platform that connects users; we do not provide charging equipment</li>
                        <li>Service availability may vary by location and is subject to host availability</li>
                        <li>We do not guarantee continuous, uninterrupted, or error-free service</li>
                        <li>Services may be temporarily unavailable due to maintenance or technical issues</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* User Obligations */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">4. User Obligations and Conduct</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">4.1 General Conduct</h3>
                      <p className="text-muted-foreground mb-3">All users must:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Comply with all applicable laws and regulations</li>
                        <li>Treat other users, hosts, and ChargingMitra staff with respect</li>
                        <li>Use the Services only for their intended purpose</li>
                        <li>Maintain the confidentiality of account credentials</li>
                        <li>Report any safety issues or platform violations immediately</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Prohibited Activities</h3>
                      <p className="text-muted-foreground mb-3">You may not:</p>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <ul className="list-disc list-inside space-y-2 text-red-800 text-sm">
                          <li>Use false or misleading information in your profile or communications</li>
                          <li>Engage in fraudulent activities or payment disputes</li>
                          <li>Harass, threaten, or discriminate against other users</li>
                          <li>Use the platform for illegal activities or purposes</li>
                          <li>Attempt to circumvent our payment systems or fees</li>
                          <li>Access or use others' accounts without permission</li>
                          <li>Reverse engineer, modify, or hack our platform</li>
                          <li>Use automated tools or bots to access our services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Host-Specific Terms */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">5. Host-Specific Terms</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Host Requirements</h3>
                      <p className="text-muted-foreground mb-3">To become a host, you must:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Complete identity verification including Aadhaar and PAN verification</li>
                        <li>Provide accurate property information and charging setup details</li>
                        <li>Ensure compliance with local electrical safety regulations</li>
                        <li>Maintain adequate insurance coverage for your property</li>
                        <li>Obtain necessary permits or approvals as required by local authorities</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Host Responsibilities</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Shield className="w-4 h-4 text-green-600" />
                              Safety & Maintenance
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                              <li>• Maintain safe and functional charging equipment</li>
                              <li>• Conduct regular safety inspections</li>
                              <li>• Provide adequate lighting and security</li>
                              <li>• Ensure clear access to charging points</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-600" />
                              Service Quality
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                              <li>• Provide accurate availability information</li>
                              <li>• Respond promptly to booking requests</li>
                              <li>• Assist drivers with charging process if needed</li>
                              <li>• Maintain professional communication</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Host Liability</h3>
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          Hosts are responsible for the safety and condition of their charging equipment and property.
                          ChargingMitra is not liable for damage to vehicles or property during charging sessions.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </section>

                {/* Payment Terms */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <CreditCard className="w-7 h-7 text-green-600" />
                    6. Payment Terms
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Payment Processing</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>All payments are processed securely through our integrated payment partners</li>
                        <li>Drivers are charged at the time of booking confirmation</li>
                        <li>Payment includes charging fees, taxes, and platform service charges</li>
                        <li>We accept UPI, credit/debit cards, and digital wallets</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Service Fees</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-foreground mb-3">Fee Structure</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground"><strong>Host Earnings:</strong> 80-85% of charging fees</p>
                            <p className="text-muted-foreground"><strong>Platform Fee:</strong> 15-20% of charging fees</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground"><strong>Driver Service Fee:</strong> ₹5-15 per booking</p>
                            <p className="text-muted-foreground"><strong>Payment Processing:</strong> 2-3% of transaction value</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.3 Refund Policy</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li><strong>Cancellation by Driver:</strong> Full refund if cancelled 2+ hours before session</li>
                        <li><strong>Host Cancellation:</strong> Full refund plus ₹50 inconvenience fee to driver</li>
                        <li><strong>Technical Issues:</strong> Full refund if charging equipment fails</li>
                        <li><strong>No-show by Driver:</strong> No refund after 30 minutes of scheduled time</li>
                        <li><strong>Partial Charging:</strong> Prorated refund based on actual consumption</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.4 Host Payouts</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Host earnings are transferred within 3-7 business days after session completion</li>
                        <li>Minimum payout threshold is ₹500</li>
                        <li>Bank transfer charges may apply as per standard banking rates</li>
                        <li>Hosts must provide valid bank account and tax information</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">7. Intellectual Property Rights</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">7.1 ChargingMitra Property</h3>
                      <p className="text-muted-foreground mb-3">
                        All content, features, and functionality of our Services, including but not limited to text, graphics,
                        logos, images, software, and design, are owned by ChargingMitra and are protected by intellectual property laws.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">7.2 User Content</h3>
                      <p className="text-muted-foreground mb-3">
                        By uploading or submitting content to our platform, you grant ChargingMitra a worldwide, non-exclusive,
                        royalty-free license to use, modify, and display such content for the operation of our Services.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Privacy and Data Protection */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">8. Privacy and Data Protection</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                    </p>
                    <p>
                      By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
                    </p>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">9. Limitation of Liability</h2>
                  <div className="space-y-6">
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important Legal Notice:</strong> Please read this section carefully as it limits our liability to you.
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">9.1 Service Disclaimer</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>ChargingMitra provides a platform to connect drivers and hosts; we do not own or operate charging equipment</li>
                        <li>We do not guarantee the availability, quality, or safety of charging services</li>
                        <li>We are not responsible for interactions between users or for services provided by hosts</li>
                        <li>Services are provided "as is" without warranties of any kind</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">9.2 Limitation of Damages</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <p className="text-muted-foreground text-sm">
                          To the maximum extent permitted by law, ChargingMitra shall not be liable for any indirect, incidental,
                          consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities,
                          arising from your use of our Services.
                        </p>
                        <p className="text-muted-foreground text-sm mt-3">
                          Our total liability to you for any claims arising from these Terms or your use of our Services
                          shall not exceed the amount you paid to ChargingMitra in the 12 months preceding the claim.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Indemnification */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">10. Indemnification</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      You agree to defend, indemnify, and hold harmless ChargingMitra, its affiliates, officers, directors,
                      employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable attorney's fees) arising from:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Your use of our Services or violation of these Terms</li>
                      <li>Your violation of any rights of another party</li>
                      <li>Your violation of any applicable laws or regulations</li>
                      <li>Content you submit or activities you conduct on our platform</li>
                    </ul>
                  </div>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">11. Termination</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">11.1 Termination by You</h3>
                      <p className="text-muted-foreground">
                        You may terminate your account at any time by contacting our support team or using the account deletion feature in the app.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">11.2 Termination by ChargingMitra</h3>
                      <p className="text-muted-foreground mb-3">We may suspend or terminate your account if you:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Violate these Terms or our Community Guidelines</li>
                        <li>Engage in fraudulent or illegal activities</li>
                        <li>Provide false information or impersonate others</li>
                        <li>Fail to pay fees or engage in payment disputes</li>
                        <li>Create safety risks for other users</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">11.3 Effect of Termination</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Upon termination, your access to Services will cease immediately</li>
                        <li>Outstanding payments will be processed according to our policies</li>
                        <li>Sections relating to liability, indemnification, and dispute resolution survive termination</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Dispute Resolution */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">12. Dispute Resolution</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">12.1 Governing Law</h3>
                      <p className="text-muted-foreground">
                        These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">12.2 Dispute Resolution Process</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="text-center">
                          <CardContent className="p-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-blue-600 font-bold text-sm">1</span>
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Direct Resolution</h4>
                            <p className="text-xs text-muted-foreground">Contact our support team first</p>
                          </CardContent>
                        </Card>
                        <Card className="text-center">
                          <CardContent className="p-4">
                            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-yellow-600 font-bold text-sm">2</span>
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Mediation</h4>
                            <p className="text-xs text-muted-foreground">Attempt mediation if direct resolution fails</p>
                          </CardContent>
                        </Card>
                        <Card className="text-center">
                          <CardContent className="p-4">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-red-600 font-bold text-sm">3</span>
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Legal Action</h4>
                            <p className="text-xs text-muted-foreground">Last resort through appropriate courts</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">13. Changes to Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. We will notify you of material changes through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Email notification to your registered email address</li>
                      <li>In-app notifications</li>
                      <li>Prominent notice on our website</li>
                    </ul>
                    <p>
                      Your continued use of our Services after the effective date of changes constitutes acceptance of the updated Terms.
                    </p>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <Card className="bg-gradient-to-r from-secondary/5 to-accent/5 border-2 border-secondary/20">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Phone className="w-7 h-7 text-secondary" />
                        14. Contact Information
                      </h2>
                      <div className="space-y-6">
                        <p className="text-muted-foreground">
                          If you have any questions, concerns, or disputes regarding these Terms of Service, please contact us:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Legal Department</h4>
                            <div className="space-y-2 text-muted-foreground">
                              <p className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                legal@chargingmitra.com
                              </p>
                              <p className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                +91-80-4567-8901 (Mon-Fri, 10 AM - 5 PM IST)
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Registered Office</h4>
                            <div className="space-y-2 text-muted-foreground">
                              <p>ChargingMitra Technologies Pvt. Ltd.</p>
                              <p>123 Tech Park, Electronic City</p>
                              <p>Bengaluru, Karnataka - 560100</p>
                              <p>India</p>
                              <p>CIN: U72200KA2024PTC123456</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 border">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Acknowledgment
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            By using ChargingMitra's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. This agreement constitutes the entire agreement between you and ChargingMitra regarding the use of our Services.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;