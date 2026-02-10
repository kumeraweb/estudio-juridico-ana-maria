// Configuración centralizada de datos de contacto
// Estudio Jurídico Ana María Erazo
// Usado para botones de WhatsApp, mailto y CTAs del sitio

export const CONTACT_CONFIG = {
  phone: {
    raw: '+56926050846',
    whatsapp: '56926050846',
    display: '+56 9 2605 0846'
  },
  email: 'amerazoch@gmail.com'
}

export const LAWYER_FULL_NAME = 'Ana María Erazo Chinchón'
export const SERVICE_AREAS_SHORT = ['Familia', 'Sucesorio', 'Inmobiliario']
export const SERVICE_LOCATION = 'Región del Biobío · Concepción'
export const RESPONSE_TIME_HOURS = 2

// Helpers opcionales para uso en componentes
export const WHATSAPP_URL = `https://wa.me/${CONTACT_CONFIG.phone.whatsapp}`
export const MAILTO_URL = `mailto:${CONTACT_CONFIG.email}`
