// Configuración centralizada de datos de contacto
// Estudio Jurídico Ana María Erazo
// Usado para botones de WhatsApp, mailto y CTAs del sitio

export const CONTACT_CONFIG = {
  phone: {
    raw: '926050846',
    whatsapp: '56926050846',
    display: '+56 9 2605 0846'
  },
  email: 'amerazoch@gmail.com'
}

// Helpers opcionales para uso en componentes
export const WHATSAPP_URL = `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}`
export const MAILTO_URL = `mailto:${CONTACT_CONFIG.email}`
