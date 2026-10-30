import '@rhds/elements/rh-icon/rh-icon.js'
import contactLinks from '../data/contact_links.json'
import sendIcon from '../assets/icons/rh-ui-icon-send.svg'

const iconModules = import.meta.glob('../assets/icons/*', {
  eager: true,
  import: 'default',
})
const iconUrls = Object.fromEntries(
  Object.entries(iconModules).map(([path, url]) => [path.split('/').pop(), url]),
)

function ContactUs() {
  return (
    <section id="contact-us" aria-labelledby="h-contact-us">
      <span className="contact-bubble" aria-hidden="true"></span>

      <span className="contact-photo" aria-hidden="true"></span>

      <span className="contact-icon-bubble">
          <img className="contact-send-icon" src={sendIcon} alt="Send Icon" />
        </span>

      <div className="contact-content">
        <h1 id="h-contact-us">Contact us</h1>
        <ul className="contact-list">
          {contactLinks.map((link) => (
            <li key={`${link.label}-${link.href}`}>
              <a
                className="contact-link"
                data-label={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon-list">
                  {link.icon && link.icon.set === 'custom' ? (
                    <img src={iconUrls[link.icon.src]} alt="" />
                  ) : (
                    link.icon && <rh-icon set={link.icon.set} icon={link.icon.icon}></rh-icon>
                  )}
                </span>
                <span className="visually-hidden">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ContactUs
