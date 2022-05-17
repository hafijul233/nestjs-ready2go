import * as cloudinary from 'cloudinary'

import { CLOUD_NAME, API_KEY, API_SECRET } from '../../environments'

/**
 * Returns image url by upload file.
 *
 * @remarks
 * This method is part of the {@link shared/upload}.
 *
 * @param createReadStream - 1st input number
 * @returns The string mean of `createReadStream`
 *
 * @beta
 */
export const uploadFile = async (file: any): Promise<string> => {
	cloudinary.config({
		cloud_name: CLOUD_NAME!,
		api_key: API_KEY!,
		api_secret: API_SECRET!
	})

	const uniqueFilename = new Date().toISOString()

	const result = await new Promise(async (resolve, reject) => {
		cloudinary.v2.uploader
			.upload_stream(
				{
					folder: 'rest',
					public_id: uniqueFilename,
					tags: 'rest'
				}, // directory and tags are optional
				(err, image) => {
					if (err) {
						reject(err)
					}
					resolve(image)
				}
			)
			.end(file.buffer)
	})

	// tslint:disable-next-line:no-string-literal
	return result['secure_url']
}
