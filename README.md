# Chulada de Sal — Sitio Web

Sitio web oficial de Chulada de Sal, sal marina artesanal de Cuyutlán, Colima.

## Estructura

```
chulada-de-sal/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos
├── js/
│   └── main.js         # Interacciones
└── README.md
```

## Despliegue en GitHub Pages

1. Subir este repositorio a `github.com/kinoluiggi/chulada-de-sal`
2. Ir a **Settings → Pages**
3. En **Source** seleccionar `main` branch, carpeta `/ (root)`
4. Guardar — el sitio estará en `kinoluiggi.github.io/chulada-de-sal`

## Dominio personalizado

1. Comprar dominio `chuladadesal.mx` en Namecheap o GoDaddy (~MXN 200/año)
2. En GitHub Pages → Custom domain: escribir `chuladadesal.mx`
3. En el panel de tu dominio, agregar estos registros DNS:
   - Tipo A → 185.199.108.153
   - Tipo A → 185.199.109.153
   - Tipo A → 185.199.110.153
   - Tipo A → 185.199.111.153
4. Activar "Enforce HTTPS" en GitHub Pages settings

## Actualizar WhatsApp y correo

En `index.html` buscar y reemplazar:
- `521XXXXXXXXXX` → tu número real con código de país (ej. `5215512345678`)
- `hola@chuladadesal.mx` → tu correo real
- `chuladadesal` en Instagram → tu usuario real

## Para agregar pagos (Mercado Pago)

1. Crear cuenta en mercadopago.com.mx
2. En tu panel → Cobros → Botón de pago
3. Crear un botón por cada producto
4. Reemplazar los `<a href="#contacto"` de cada producto por el código del botón

---
Marca registrada IMPI Clase 30 · CDMX, México · Hecho en México
