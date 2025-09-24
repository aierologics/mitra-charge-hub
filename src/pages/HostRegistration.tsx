import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostRegistrationForm from "@/components/HostRegistrationForm";

const HostRegistration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HostRegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default HostRegistration;