import type { RequestHandler } from './__types/generate-qr-code'
import qr from 'qrcode'


export const POST: RequestHandler = async ({request})  => {
  const { url } = await request.json()
  const qrCodeDataURL = await qr.toDataURL(url)

  return {
    body: {
      qrCodeDataURL
    }
  }
}