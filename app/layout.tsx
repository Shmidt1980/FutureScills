
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{background:'#0A0A0A',color:'#EAEAEA',fontFamily:'monospace'}}>
        {children}
      </body>
    </html>
  )
}
