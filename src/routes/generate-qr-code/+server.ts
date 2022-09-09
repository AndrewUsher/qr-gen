import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import qr from 'qrcode';

export const POST: RequestHandler = async ({ request }) => {
	const { url } = await request.json();
	const qrCodeDataURL = await qr.toDataURL(url);

	return json$1({
		qrCodeDataURL
	});
};
