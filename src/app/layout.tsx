import '../styles/globals.css'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnalyticsPlaceholder from '@/components/AnalyticsPlaceholder'
import StructuredData from '@/components/StructuredData'
import { baseMetadata, schemaOrganization, schemaPerson, schemaWebsite } from '@/lib/seo'

export const metadata = baseMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StructuredData data={[schemaWebsite, schemaOrganization, schemaPerson]} />
        <Header />
        <main>{children}</main>
        <AnalyticsPlaceholder />
        <Footer />
      </body>
    </html>
  )
}
