import { useEffect, useId, useRef, useState } from 'react'
import {
  countryCodes,
  defaultCountryDial,
} from '../lib/countryCodes'

type Country = (typeof countryCodes)[number]

type CountrySelectProps = {
  name?: string
  label: string
  /** dial = phone codes; country = residence / name only */
  mode?: 'dial' | 'country'
  placeholder?: string
  defaultDial?: string
  defaultCountry?: string
  required?: boolean
  className?: string
}

const fallback =
  countryCodes.find((c) => c.dial === defaultCountryDial) ?? countryCodes[0]

function labelFor(country: Country, mode: 'dial' | 'country') {
  return mode === 'dial' ? `${country.name} (${country.dial})` : country.name
}

export function CountrySelect({
  name = 'countryCode',
  label,
  mode = 'dial',
  placeholder = 'Choose',
  defaultDial = defaultCountryDial,
  defaultCountry,
  required = false,
  className,
}: CountrySelectProps) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Country | null>(() => {
    if (mode === 'country') {
      if (!defaultCountry) return null
      return countryCodes.find((c) => c.name === defaultCountry) ?? null
    }
    return countryCodes.find((c) => c.dial === defaultDial) ?? fallback
  })

  useEffect(() => {
    if (!open) return

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const hiddenValue =
    mode === 'dial' ? (selected?.dial ?? '') : (selected?.name ?? '')

  return (
    <div className={`ct-code${className ? ` ${className}` : ''}`} ref={rootRef}>
      <input
        type="hidden"
        name={name}
        value={hiddenValue}
        required={required}
      />
      <button
        type="button"
        className={`ct-code__trigger${selected ? '' : ' is-placeholder'}`}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="ct-code__value">
          {selected ? labelFor(selected, mode) : placeholder}
        </span>
        <span className="ct-code__chev" aria-hidden="true" />
      </button>

      {open ? (
        <ul
          id={listId}
          className="ct-code__list"
          role="listbox"
          aria-label={label}
        >
          {countryCodes.map((country) => {
            const active =
              !!selected &&
              country.name === selected.name &&
              country.dial === selected.dial
            return (
              <li key={`${country.name}-${country.dial}`} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={`ct-code__option${active ? ' is-active' : ''}`}
                  onClick={() => {
                    setSelected(country)
                    setOpen(false)
                  }}
                >
                  {labelFor(country, mode)}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

/** Phone country-code control (back-compat). */
export function CountryCodeSelect(
  props: Omit<CountrySelectProps, 'mode'>,
) {
  return <CountrySelect {...props} mode="dial" />
}
