import { Heart, Mail, Phone } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { InstagramIcon } from "@/components/InstagramIcon";
import { Portrait } from "@/components/Portrait";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="card-stage">
        <div className="profile-block">
          <Portrait />
          <section
            className="profile-panel anim-profile"
            aria-label="Profile"
          >
            <h1 className="profile-name">Kiana Shams</h1>
            <p className="profile-role">Transformation &amp; Lifestyle Coach</p>
            <div className="profile-divider" aria-hidden="true">
              <Heart size={12} strokeWidth={1.5} fill="currentColor" />
            </div>
          </section>
        </div>

        <nav className="contact-stack" aria-label="Contact options">
          <ContactCard
            href="tel:+96899446852"
            label="Phone"
            value="+968 9944 6852"
            ariaLabel="Call Kiana Shams at +968 9944 6852"
            icon={<Phone size={18} strokeWidth={1.75} />}
          />
          <ContactCard
            href="https://www.instagram.com/coach__kianaa/"
            mobileHref="instagram://user?username=coach__kianaa"
            label="Instagram"
            value="@coach__kianaa"
            ariaLabel="Open Instagram profile @coach__kianaa"
            icon={<InstagramIcon size={18} />}
            external
          />
          <ContactCard
            href="https://api.whatsapp.com/send?phone=96899446852"
            label="WhatsApp"
            value="+968 9944 6852"
            ariaLabel="Message Kiana Shams on WhatsApp"
            icon={<WhatsAppIcon size={18} />}
          />
          <ContactCard
            href="mailto:shamskiana@gmail.com"
            label="Email"
            value="shamskiana@gmail.com"
            ariaLabel="Email Kiana Shams at shamskiana@gmail.com"
            icon={<Mail size={18} strokeWidth={1.75} />}
          />
        </nav>
      </div>
    </main>
  );
}
