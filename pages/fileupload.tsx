// app/page.tsx
import CustomFileSelector from "../components/CustomFileSelector";
import FileUploadForm from "../components/FileUploadForm";

export default function FileUpload() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <CustomFileSelector /> */}
            <FileUploadForm />
        </div>
    );
}
