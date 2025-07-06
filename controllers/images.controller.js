import { v2 as cloudinary } from "cloudinary"

export const uploadImage = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload_stream({ resource_type: 'image' },
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

export const imageCropFace = (req, res) => {
    const { public_id } = req.body
    
    const image = cloudinary.image(public_id, {
        transformation: [
            { gravity: "face", height: 200, width: 200, crop: "thumb" },
            { radius: "max" },
            { fetch_format: "auto" }
        ]
    })

    console.log(image)
    res.send(image)
}

export const imageBGRemoval = (req, res) => {
    const { public_id } = req.body
    
    const image = cloudinary.image(public_id, {effect: "background_removal"})

    console.log(image)
    res.send(image)
}