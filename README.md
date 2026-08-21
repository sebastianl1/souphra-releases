<div align="center">

<img src="https://sebastianl1.github.io/souphra-releases/logo.svg" width="110" alt="Ψ Souphra"/>

# Ψ Souphra

**Música sin interrupciones — radio colombiana en vivo, biblioteca y reproducción continua.**

Gratis · Sin anuncios · Sin cobros · Hecho en Colombia

[![Web oficial](https://img.shields.io/badge/Web_oficial-7a0a0a?style=for-the-badge&logo=googlechrome&logoColor=white)](https://sebastianl1.github.io/souphra-releases/)
[![Última versión](https://img.shields.io/github/v/release/sebastianl1/souphra-releases?style=for-the-badge&logo=github&label=Descargar&color=ff3b30)](https://github.com/sebastianl1/souphra-releases/releases/latest)
[![Uso](https://img.shields.io/badge/Uso-100%25_gratis-00C853?style=for-the-badge)](#-legal)

[Instalar](#-instalación) · [Características](#-características) · [Actualizaciones](#-actualizaciones) · [Legal](#-legal)

</div>

---

## 📥 Instalación

### Android

| Paso | Acción |
|:---:|--------|
| **1** | Descarga la APK desde [**Releases → latest**](https://github.com/sebastianl1/souphra-releases/releases/latest) — elige `arm64-v8a` para la mayoría de móviles modernos, o `universal` si no estás seguro |
| **2** | Permite *"Instalar apps desconocidas"* para tu navegador cuando Android lo pida |
| **3** | Instala y abre — listo |

### Windows

| Paso | Acción |
|:---:|--------|
| **1** | Descarga el instalador `.msi` desde [**Releases → latest**](https://github.com/sebastianl1/souphra-releases/releases/latest) |
| **2** | Ejecuta el instalador (Windows SmartScreen puede mostrar un aviso por falta de firma — pulsa *"Ejecutar de todas formas"*) |
| **3** | Souphra aparecerá en tu menú de inicio |

> La app de escritorio incluye todo: radio, biblioteca, crossfade, letras y mini-player.

---

## ✨ Características

| Área | Detalle |
|------|---------|
| 📻 **Radio en vivo** | 27 emisoras colombianas verificadas (Caracol, W Radio, Olímpica, Tropicana, La Mega, Blu, Radioacktiva…) con **reconexión transparente** — sin cortes ni repeticiones |
| 🎵 **Reproducción pro** | Crossfade configurable, cola infinita, normalización de volumen, salto de silencios, SponsorBlock |
| 📝 **Letras** | Sincronizadas desde LRCLIB / BetterLyrics / YouTube, con proveedor seleccionable |
| 🖥️ **Interfaz** | Tema oscuro con rojos profundos, barra negra con partículas animadas, ajustes organizados por categorías |
| 💾 **Biblioteca** | Playlists, historial, favoritos, importación y descargas offline |
| 🔄 **Actualizaciones** | Comprobación cada 24 h con notificación y diálogo de instalación directa |
| 🪟 **Multiplataforma** | Android (APK) y Windows (MSI) desde el mismo código Kotlin Multiplatform |

### Identidad visual

| Elemento | Valor |
|----------|-------|
| Símbolo | **Ψ** (psi griega) |
| Primario | `#ff3b30` → `#7a0a0a` (rojos profundos) |
| Fondo | `#070507` / superficie `#151010` |

---

## 🔄 Actualizaciones

La app comprueba [`api.github.com/repos/sebastianl1/souphra-releases/releases/latest`](https://api.github.com/repos/sebastianl1/souphra-releases/releases/latest) cada 24 horas:

1. Si hay una versión nueva → **notificación** en el sistema.
2. Al abrir la app → **diálogo bloqueante** con botón **Descargar** que baja el asset directamente (con respaldo de navegador hacia la página del release).

No necesitas reenviar APKs manualmente: publica un tag nuevo aquí y todos los dispositivos se actualizarán solos.

---

## 🛠️ Detalles técnicos

- **Stack:** Kotlin Multiplatform + Compose Multiplatform, Media3 ExoPlayer (Android) / libmpv (Desktop), Ktor, Room, Koin, DataStore, WorkManager
- **Android:** mínimo API 26 (Android 8.0) · arquitecturas `arm64-v8a` y `universal`
- **Windows:** instalador MSI (jpackage) · x64
- **Distribución:** cada tag `vX.Y.Z` publica los assets en este repo; la web oficial hace *fetch* del último release para los botones de descarga

---

## ⚖️ Legal

**Souphra es totalmente gratuita y de uso libre.**

- **Sin cobros:** ni por la app, ni por descargas, ni por funciones. No hay compras internas, suscripciones ni anuncios.
- **Compartible:** puedes instalarla en tus dispositivos y compartir los instaladores con quien quieras.
- **Respeto a derechos:** reproduce contenido disponible públicamente (YouTube Music y streams de radio). No aloja música ni elude DRM. El uso debe respetar los términos de las fuentes originales.
- **Privacidad:** no se recopilan datos personales más allá de lo necesario para reproducir y notificar actualizaciones. No se vende información.
- **Sin garantías:** se entrega *"tal cual"*; la disponibilidad de streams de terceros puede variar.

Si eres titular de derechos y consideras que algún stream debe retirarse, [abre un Issue](https://github.com/sebastianl1/souphra-releases/issues) y se revisará de inmediato.

---

## 📄 Licencia y créditos

- El contenido de este repo (web y scripts): MIT.
- Basado en el ecosistema open source de SimpMusic y librerías de terceros.

---

<div align="center">

**Hecho con ♥ en Colombia** — `Ψ` sobre rojos profundos

[⬆ Volver arriba](#-souphra)

</div>
