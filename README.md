# Bodas de Perla · Raúl y Rossio

Tarjeta web para los 30 años de Raúl Aguirre y Rossio López. Se abre como un sobre, tiene carta, fotos y la canción *Primer Amor*.

Es un sitio estático (HTML, CSS y JavaScript). No hace falta instalar nada para publicarlo.

## Verla en tu computadora

```bash
python3 -m http.server 4173
```

Abre [http://localhost:4173](http://localhost:4173).

## Publicarla en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **Add New… → Project** e importa el repositorio `aniversario-bodas-de-perla`.
3. Deja el framework en **Other**.
4. **Build Command** vacío. **Output Directory** vacío (o `.`).
5. Pulsa **Deploy**.

Vercel te da un enlace público, por ejemplo `https://aniversario-bodas-de-perla.vercel.app`. Ese es el que se manda por WhatsApp.

La música empieza al tocar el sobre. Los navegadores no dejan que suene sola antes de ese toque.

## Después de publicar

En `index.html`, cambia la etiqueta `og:image` por la dirección completa de una foto para que la vista previa de WhatsApp salga con imagen. Por ejemplo:

`https://tu-proyecto.vercel.app/photos/09-torta.jpg`
