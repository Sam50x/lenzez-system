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

export const imageBGRemoval = (req, res) => {
    const { public_id } = req.body

    if (!public_id) {
        return res.status(500).json({ error: 'public_id missing' })
    }

    const image = cloudinary.image(public_id, { effect: "background_removal" })

    console.log(image)
    res.send(image)
}

export const imageBGReplacement = (req, res) => {
    const { public_id, prompt } = req.body

    if (!public_id) {
        return res.status(500).json({ error: 'public_id missing' })
    }

    const image = cloudinary.image(public_id, {
        transformation: [
            { effect: "background_removal" },
            { effect: `gen_background_replace:prompt_a ${prompt}` }
        ]
    })

    console.log(image)
    res.send(image)
}

export const imageObjectRemoval = (req, res) => {
    const { public_id, prompt } = req.body

    if (!public_id) {
        return res.status(500).json({ error: 'public_id missing' })
    }

    const image = cloudinary.image(public_id, {effect: `gen_remove:prompt_the ${prompt};remove-shadow_true`})

    console.log(image)
    res.send(image)
}

export const imageObjectReplacement = (req, res) => {
    const { public_id, prompt_from, prompt_to } = req.body

    if (!public_id) {
        return res.status(500).json({ error: 'public_id missing' })
    }

    const image = cloudinary.image(public_id, {effect: `gen_replace:from_the ${prompt_from};to_a ${prompt_to}`})

    console.log(image)
    res.send(image)
}

export const imageCrop = (req, res) => {
    const { public_id, ratio } = req.body

    if (!public_id) {
        return res.status(500).json({ error: 'public_id missing' })
    }

    const image = cloudinary.image(public_id, {
        transformation: [
            { aspect_ratio: ratio, gravity: "auto", crop: "fill" },
            { quality: "auto" },
            { fetch_format: "auto" }
        ]
    })

    console.log(image)
    res.send(image)
}

export const imageGenerativeFill = (req, res) => {
    const { public_id, ratio } = req.body

    if (!public_id) {
        return res.status(500).json({ error: 'public_id missing' })
    }

    const image = cloudinary.image(public_id, {
        transformation: [
            { aspect_ratio: ratio, background: "gen_fill", crop: "pad" },
            { quality: "auto" },
            { fetch_format: "auto" }
        ]
    })

    console.log(image)
    res.send(image)
}

export const imageEnhance = (req, res) => {
    const { public_id } = req.body

    if (!public_id) {
        return res.status(500).json({ error: 'public_id missing' })
    }

    const image = cloudinary.image(public_id, {effect: "gen_restore"})

    console.log(image)
    res.send(image)
}