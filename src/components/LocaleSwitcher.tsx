'use client'

import { useTranslations } from "next-intl"
import LocaleSwitcherSelect from "./LocaleSwitcherSelect"

export default function LocaleSwitcher() {

  const t = useTranslations();

  return (
    <LocaleSwitcherSelect
    options={[
      { value: 'en', label: 'English' },
      { value: 'fa', label: 'Farsi' },
      { value: 'tu', label: 'turkey'},
    ]}
    defaultValue="en"
    label={t("localeSwitcher")}
    />
  )
}
