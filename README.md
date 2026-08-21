# Souphra — Descargas

<p align="center">
  <img src="https://raw.githubusercontent.com/sebastianl1/souphra/main/composeApp/src/commonMain/composeResources/drawable/mono.xml" width="120" alt="Souphra Logo" onerror="this.style.display='none'"/>
</p>

<p align="center">
  <strong>Reproductor de música privado para Android — una experiencia enfocada, rápida y sin anuncios.</strong><br/>
  Fork privado de SimpMusic, rediseñado para Colombia y para compartir entre amigos.
</p>

<p align="center">
  <a href="https://sebastianl1.github.io/souphra-releases/"><img src="https://img.shields.io/badge/Web-Souphra-FF5A5A?style=for-the-badge" alt="Web"/></a>
  <a href="https://github.com/sebastianl1/souphra-releases/releases"><img src="https://img.shields.io/github/v/release/sebastianl1/souphra-releases?label=última%20versión&color=FF5A5A&style=for-the-badge" alt="Release"/></a>
  <a href="https://github.com/sebastianl1/souphra"><img src="https://img.shields.io/badge/Código-Privado-121212?style=for-the-badge" alt="Privado"/></a>
</p>

---

## 📥 Descarga

> **Siempre instala la última versión.** La app te avisará automáticamente cuando haya una actualización y te obligará a actualizar (no te quedarás atrás).

| Canal | Enlace |
|-------|--------|
| **Última APK (recomendado)** | [Descargar APK — GitHub Releases](https://github.com/sebastianl1/souphra-releases/releases/latest) |
| **Web oficial** | [sebastianl1.github.io/souphra-releases](https://sebastianl1.github.io/souphra-releases/) |
| **Código fuente** | Privado en [`sebastianl1/souphra`](https://github.com/sebastianl1/souphra) |

### Instalación

1. Descarga el APK desde **Releases** (archivo `souphra-*.apk`).
2. En Android, permite **“Instalar apps desconocidas”** para el navegador/administrador de archivos.
3. Abre el APK y toca **Instalar**.
4. ¡Listo! La app te notificará cada 24 h si hay una versión nueva.

> **Nota para amigos:** si ves el diálogo **“Actualización disponible”** a pantalla completa, toca **Descargar** — se descargará automáticamente y si falla, se abrirá el navegador en la página del release.

---

## ✨ Características

- **Radio en vivo** — 27 emisoras colombianas verificadas (Caracol, W Radio, Olímpica, Tropicana, La Mega, etc.) con reconexión seamless.
- **Biblioteca y listas** — importa playlists, gestiona tu música, historial y favoritos.
- **Reproducción avanzada** — crossfade, cola infinita, letras sincronizadas (LRCLIB/BetterLyrics/YouTube), SponsorBlock, normalización y salto de silencios.
- **Interfaz cuidada** — tema oscuro con semillas personalizables, barra inferior negra con partículas animadas, navegación fluida con transiciones corregidas.
- **Actualizaciones forzadas** — la app comprueba cada 24 h en `sebastianl1/souphra-releases` y te obliga a actualizar; no necesitas que te reenvíen la APK.

---

## 🎨 Capturas

> _Próximamente — la web incluye una galería interactiva._

| Inicio | Radio | Biblioteca |
|--------|-------|------------|
| ![Home](https://via.placeholder.com/270x600/121212/FF5A5A?text=Inicio) | ![Radio](https://via.placeholder.com/270x600/121212/FF5A5A?text=Radio) | ![Library](https://via.placeholder.com/270x600/121212/FF5A5A?text=Biblioteca) |

---

## 🛠️ Stack técnico

- **Kotlin Multiplatform + Compose** — Android (principal), Desktop (JVM) y iOS (en progreso)
- **Media3 ExoPlayer** con `ReconnectingDataSource` para radio continua
- **Ktor + Coil + Room** — red, imágenes y persistencia
- **Koin + DataStore + WorkManager** — inyección, preferencias y tareas periódicas

---

## 📦 Releases

Los APK se publican aquí, no en el repo privado. Cada release contiene:

- `souphra-<version>-arm64-v8a.apk` y `souphra-<version>-universal.apk`
- Changelog y notas de la versión
- Fecha y tag semántico (`v1.2.0`, etc.)

La app compara `VersionManager.getVersionName()` con `tagName` del último release en `api.github.com/repos/sebastianl1/souphra-releases/releases/latest` (fallback si el privado falla) y muestra notificación + diálogo bloqueante.

---

## 🌐 Web

La web promocional vive en este mismo repo y se despliega vía **GitHub Pages + Actions** (`main` → `gh-pages`):

- **URL:** https://sebastianl1.github.io/souphra-releases/
- **Fuente:** `index.html` + `assets/` en la raíz
- **Workflow:** `.github/workflows/pages.yml` (deploy on push a `main`)

---

## 🤝 Para amigos

Este es un proyecto **privado y sin fines de lucro**. Si tienes la APK, ya eres parte. Cuando veas la notificación de actualización, instala y listo — sin reenvíos.

---

## 📄 Licencia

Código del repo privado: privado. Assets y web de este repo de releases: MIT.

---

<p align="center">Hecho con ♥ en Colombia — <code>#FF5A5A</code></p>
