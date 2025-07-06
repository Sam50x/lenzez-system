import { v2 as cloudinary } from "cloudinary"

export const uploadVideo = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload_stream({ resource_type: 'video' },
            (error, result) => {
                if (error) return res.status(500).json({ error })
                res.json({ url: result.secure_url, public_id: result.public_id })
            }
        ).end(req.file.buffer)
    }
    catch (e) {
        res.status(500).json({ success: false, error: e })
    }
}

export const videoCrop = (req, res) => {
    const { public_id, ratio } = req.body

    if (!public_id) {
        return res.status(500).json({ error: 'public_id missing' })
    }

    const video = cloudinary.video(public_id, {
        transformation: [
            { aspect_ratio: ratio, gravity: "auto", crop: "fill" },
            { quality: "auto" },
            { fetch_format: "auto" }
        ]
    })

    console.log(video)
    res.send(video)
}