import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input, Radio
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
function formatCardNumber(value) {
    const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        return parts.join(" ");
    } else {
        return value;
    }
}

function formatExpires(value) {
    return value
        .replace(/[^0-9]/g, "")
        .replace(/^([2-9])$/g, "0$1")
        .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
        .replace(/^0{1,}/g, "0")
        .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).\*/g, "$1/$2");
}
function FloatingButton() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [formData, setFormData] = useState({
        work_content: '',
        name_cus: '',
        date_book: '',
        work_note: '',
        street: '',
        district: '',
        phone_number: '',
        members_read: 1,
        kind_work: '0',
        status_cus: 1,
        from_cus: 1,
        flag_status: 1
    });
    console.log('test selectedFiles',selectedFiles);
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('name', name);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
        console.log('Gui File', files);
        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    const handleAddWork = async (e) => {
        e.preventDefault();

        const formData1 = new FormData();
        selectedFiles.forEach((file) => {
            formData1.append('image_work_path', file);
        });
        formData1.append("work_content", formData.work_content);
        console.log("work_content",formData.work_content);
        formData1.append("date_book", formData.date_book);
        formData1.append("district",formData.district);
        formData1.append("phone_number", formData.phone_number);
        formData1.append("members_read", formData.members_read);
        formData1.append("kind_work", formData.kind_work);
        formData1.append("status_cus",formData.status_cus);
        formData1.append("flag_status",formData.flag_status);
        formData1.append("from_cus",formData.from_cus);
        formData1.append("street", formData.street);
        // formData.append("image_work_path", formData.files[0]);
        console.log("form data date_book", formData.date_book);
        console.log("form data formData1", formData1);
        console.log("form data formData", formData);
        try {
            const response = await fetch('http://192.168.1.3/api/web/works', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors',
                body: JSON.stringify(formData),
            });
            console.log('Files uploaded successfully',response);
            if (response.ok) {
                console.log('Files uploaded successfully',response);
            } else {
                console.error('Error uploading files');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <Fragment>
            <Button className='p-3 text-black bg-blue-500 rounded-full ' onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader className=" md:max-lg:text-xs">Thêm Khách Hàng Mới</DialogHeader>
                    <XMarkIcon className="w-5 h-5 mr-3 cursor-pointer" onClick={handleOpen} />
                </div>
                <DialogBody divider>
                    <form className="flex flex-col"  onSubmit={handleAddWork}>
                        <div className="my-1">
                            <div className="my-2">
                                <Input
                                    label="Số điện thoại"
                                    value={formData.phone_number}
                                    id="phone_number"
                                    name="phone_number"
                                    className="shadow-none" onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <Input label="Yêu Cầu Công Việc" className="shadow-none"
                                    id="work_content"
                                    name="work_content"
                                    value={formData.work_content}
                                    onChange={handleChange} />
                            </div>
                            <div className="flex items-center gap-4 my-4">
                                <Input label="Địa Chỉ" className="shadow-none"
                                    id="street"
                                    name="street" value={formData.street} onChange={handleChange} />
                                <Input label="Quận" className="shadow-none" id="district"
                                    name="district" value={formData.district} onChange={handleChange} />
                            </div>

                            <div className="my-2">
                                <Input label="Ghi Chú" className="shadow-none" id="work_note"
                                    name="work_note" value={formData.work_note} onChange={handleChange} />
                            </div>


                            <div className="flex items-center gap-4 my-4">
                                <Input
                                    label="Tên KH "
                                    value={formData.name_cus}
                                    onChange={handleChange}
                                    id="name_cus"
                                    name="name_cus"
                                    containerProps={{ className: "min-w-[72px]" }} className="shadow-none"
                                />
                                <Input
                                    label="Ngày Làm"
                                    maxLength={4}
                                    id="date_book"
                                    name="date_book"
                                    containerProps={{ className: "min-w-[72px]" }} className="shadow-none" onChange={handleChange}
                                    value={formData.date_book}
                                />
                            </div>
                            <div className="items-center justify-center gap-4 my-4 text-xs lg:flex">
                                <Radio
                                    id="DN"
                                    name='kind_work'
                                    label="Điện Nước"
                                    value='0'
                                    checked={formData.kind_work === '0'}
                                    onChange={handleChange}
                                />
                                <Radio
                                    id="DL"
                                    name='kind_work'
                                    label="Điện Lạnh"
                                    value='1'
                                    checked={formData.kind_work === '1'} onChange={handleChange}
                                />
                                <Radio
                                    id="DG"
                                    name='kind_work'
                                    label="Đồ Gỗ"
                                    value='2'
                                    checked={formData.kind_work === '2'} onChange={handleChange}
                                />
                                <Radio id="XD"
                                    name='kind_work'
                                    label="Xây Dựng"
                                    value='3'
                                    checked={formData.kind_work === '3'} onChange={handleChange}
                                />
                                <Radio
                                    id="Khac"
                                    name='kind_work'
                                    label="Năng Lượng Và Khác"
                                    value='4'
                                    checked={formData.kind_work === '4'} onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center justify-center ">
                                <span className="sr-only">Chọn hình ảnh thực tế</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleFileChange}
                                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                                />
                                {previewImages.map((preview, index) => (
                                    <img
                                        key={index}
                                        src={preview}
                                        alt={`Preview ${index}`}
                                        style={{ width: '50px', height: 'auto', margin: '5px' }}
                                    />
                                ))}
                            </div>
                        </div>
                        <Button size="lg" className="w-11/12" type="submit">Thêm</Button>
                    </form>
                </DialogBody>
                {/* <DialogFooter className="justify-center space-x-2">
                    <Button size="lg" className="w-11/12" onClick={handleAddWork}>Thêm</Button>
                </DialogFooter> */}
            </Dialog>
        </Fragment>
    );
}
export default FloatingButton;
