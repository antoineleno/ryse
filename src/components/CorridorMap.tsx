import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const OFFICES = [
  {
    name: 'Conakry',
    meta: 'Guinea',
    coords: [9.6412, -13.5784] as [number, number],
  },
  {
    name: 'Lomé',
    meta: 'Togo',
    coords: [6.1319, 1.2228] as [number, number],
  },
]

function pinIcon() {
  return L.divIcon({
    className: 'ryse-map-pin',
    html: '<span class="ryse-map-pin__dot"></span>',
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
  })
}

export function CorridorMap({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el || mapRef.current) return

    const map = L.map(el, {
      center: [7.8, -6],
      zoom: 5,
      minZoom: 4,
      maxZoom: 12,
      scrollWheelZoom: false,
      zoomControl: true,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)

    const icon = pinIcon()
    const points = OFFICES.map((o) => o.coords)
    const bounds = L.latLngBounds(points)

    OFFICES.forEach((office) => {
      L.marker(office.coords, { icon })
        .addTo(map)
        .bindPopup(
          `<strong>${office.name}</strong><br/><span>${office.meta}</span>`,
        )
    })

    L.polyline(points, {
      color: '#A9824F',
      weight: 2.5,
      dashArray: '6 8',
      opacity: 0.95,
    }).addTo(map)

    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 6 })
    mapRef.current = map

    const refresh = () => {
      map.invalidateSize()
      map.fitBounds(bounds, { padding: [48, 48], maxZoom: 6 })
    }

    const timers = [50, 200, 500, 1000].map((ms) =>
      window.setTimeout(refresh, ms),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) refresh()
      },
      { threshold: 0.1 },
    )
    observer.observe(el)

    window.addEventListener('resize', refresh)

    return () => {
      timers.forEach((id) => window.clearTimeout(id))
      observer.disconnect()
      window.removeEventListener('resize', refresh)
      map.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div className={`ryse-map ${className}`.trim()}>
      <div ref={containerRef} className="ryse-map__canvas" />
      <p className="ryse-map__caption">West Africa · Conakry · Lomé</p>
    </div>
  )
}
