# Souphra

<p align="center">
  <img src="https://via.placeholder.com/120x120/FF5A5A/FFFFFF?text=S" width="100" alt="Souphra" style="border-radius:24px"/>
</p>

<p align="center">
  <strong>Música sin interrupciones — radio colombiana, biblioteca y reproducción continua.</strong><br/>
  Una app privada, rápida y sin anuncios, hecha para compartir entre amigos.
</p>

<p align="center">
  <a href="https://sebastianl1.github.io/souphra-releases/"><img src="https://img.shields.io/badge/Web_Souphra-FF5A5A?style=for-the-badge&logo=safari&logoColor=white" alt="Web"/></a>
  <a href="https://github.com/sebastianl1/souphra-releases/releases"><img src="https://img.shields.io/github/v/release/sebastianl1/souphra-releases?label=Descargar&color=FF5A5A&style=for-the-badge&logo=android" alt="Release"/></a>
  <a href="#legal"><img src="https://img.shields.io/badge/Uso-Gratis-00C853?style=for-the-badge" alt="Gratis"/></a>
</p>

<p align="center">
  <a href="#-descarga">Descargar</a> •
  <a href="https://sebastianl1.github.io/souphra-releases/">Web</a> •
  <a href="#-características">Características</a> •
  <a href="#-legal">Legal</a>
</p>

---

## 📥 Descarga

| Acción | Enlace |
|--------|--------|
| **Última APK** | [**Releases → Descargar APK**](https://github.com/sebastianl1/souphra-releases/releases/latest) |
| **Web oficial** | [sebastianl1.github.io/souphra-releases](https://sebastianl1.github.io/souphra-releases/) |
| **Soporte** | Abre un *Issue* en este repo o escribe a `sebasbele12@gmail.com` |

### Instalación en 3 pasos

1. **Descarga** el archivo `souphra-*.apk` desde **Releases** (elige `arm64-v8a` para la mayoría de móviles).
2. **Permite** “Instalar apps desconocidas” cuando Android te lo pida (solo para el navegador).
3. **Instala** y abre — la app te avisará cada 24 h si hay una versión nueva y te pedirá actualizar.

> **Actualización automática:** la app comprueba `api.github.com/repos/sebastianl1/souphra-releases/releases/latest` cada 24 h. Si hay un tag mayor que tu `versionName`, verás una **notificación** y un **diálogo bloqueante** con botón **Descargar** (descarga directa del asset `.apk` si está disponible, si no abre el navegador en la página del release).

---

## ✨ Características

| Área | Qué hace |
|------|----------|
| **Radio en vivo** | 27 emisoras colombianas verificadas (Caracol, W, Olímpica, Tropicana, La Mega, Radioacktiva…) con reconexión seamless sin loops |
| **Biblioteca** | Listas, historial, favoritos, importación de playlists, descargas offline |
| **Reproducción** | Crossfade, cola infinita, SponsorBlock, letras LRCLIB/BetterLyrics/YouTube, normalización, salto de silencios |
| **Interfaz** | Tema oscuro, barra negra con partículas animadas, navegación con transiciones corregidas, hub de ajustes categorizado |
| **Actualizaciones** | Notificación cada 24 h + diálogo que **obliga** a instalar (no más reenvíos de APK) |

### Colores y símbolo

- **Primario:** `#FF5A5A` (rojo vibrante)
- **Fondo:** `#121212` (negro) / `#1A1A1A` (surface)
- **Símbolo:** `S` en círculo con fondo `#FF5A5A` — usado en launcher y web

---

## 📸 Capturas

| Inicio | Radio | Biblioteca |
|--------|-------|------------|
| ![Home](https://via.placeholder.com/270x600/121212/FF5A5A?text=Inicio) | ![Radio](https://via.placeholder.com/270x600/121212/FF5A5A?text=Radio) | ![Library](https://via.placeholder.com/270x600/121212/FF5A5A?text=Biblioteca) |

---

## 🛠️ Detalles técnicos

- **Stack:** Kotlin Multiplatform + Compose, Media3 ExoPlayer, Ktor, Coil, Room, Koin, DataStore, WorkManager
- **Mínimo:** Android 8.0 (API 26) • **Arquitecturas:** `arm64-v8a` y `universal`
- **Releases:** cada tag `vX.Y.Z` publica APKs en este repo; la web hace `fetch` del último release para el botón principal

---

## ⚖️ Legal

**Souphra es totalmente gratuita y de uso libre.**

- **No se cobra** por la app, ni por descargas, ni por funciones. No hay compras internas, suscripciones ni anuncios.
- **Uso personal y para compartir entre amigos.** Puedes instalarla en tus dispositivos y compartir la APK con quien quieras.
- **Respeto a derechos:** la app reproduce contenido disponible públicamente (YouTube Music / streams de radio). No aloja música ni elude DRM. El uso debe respetar los términos de las fuentes originales.
- **Sin garantías:** se entrega “tal cual”, sin garantías de disponibilidad continua de streams de terceros.
- **Privacidad:** no se recopilan datos personales más allá de lo necesario para reproducir y notificar actualizaciones. No se vende información.

Si eres titular de derechos y consideras que algún stream debe retirarse, abre un Issue y se revisará de inmediato.

---

## 📄 Licencia y créditos

- **App y web de este repo:** MIT — puedes usar, compartir y modificar libremente este repo de releases y su web.
- Basado en el ecosistema de SimpMusic y librerías open source listadas en la app (ver **Ajustes → Acerca de → Versión** en builds previos).

---

<p align="center"><strong>Hecho con ♥ en Colombia</strong> — <code>#FF5A5A</code> sobre <code>#121212</code></p>
