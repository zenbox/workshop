import fs from "fs";
import { NextResponse } from "next/server";

export default async function POST(req: Request, res: Response) {
    console.dir(req, { depth: 0 });

    const formData = await req.formData();

    console.log("FORM_DATA:", typeof req.formData);

    const formDataEntryValues = Array.from(formData.values());

    for (const formDataEntryValue of formDataEntryValues) {
        if (
            typeof formDataEntryValue === "object" &&
            "arrayBuffer" in formDataEntryValue
        ) {
            const fil = formDataEntryValue as unknown as File;
            const buffer = Buffer.from(await fil.arrayBuffer());

            // Write the files to the public directory
            fs.writeFileSync(`/public/uploads/${fil.name}`, buffer);
        }
    }

    return NextResponse.json({ success: true });
}
