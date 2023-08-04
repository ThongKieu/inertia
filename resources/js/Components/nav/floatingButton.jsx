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
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpires, setCardExpires] = useState("");
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
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
          <form className="flex flex-col">
            <div className="my-1">
              <div className="my-2">
                <Input label="Yêu Cầu Công Việc" className="shadow-none" />
              </div>
              <div className="my-2">
                <Input label="Địa Chỉ" className="shadow-none"/>
              </div>
              <div className="my-2">
                <Input label="Quận" className="shadow-none"/>
              </div>
              <div className="my-2">
                <Input label="Ghi Chú"className="shadow-none" />
              </div>
              <div className="my-2">

                  <Input
                   label="Số điện thoại"
                   maxLength={11}
                   value={formatCardNumber(cardNumber)}
                   onChange={(event) => setCardNumber(event.target.value)}
                  className="shadow-none"
                />
                  </div>

              <div className="flex items-center gap-4 my-4">
                <Input
                  label="Tên KH "
                  value={formatExpires(cardExpires)}
                  onChange={(event) => setCardExpires(event.target.value)}
                  containerProps={{ className: "min-w-[72px]" }}className="shadow-none"
                />
                <Input
                  label="Ngày Làm"
                  maxLength={4}
                  containerProps={{ className: "min-w-[72px]" }}className="shadow-none"
                />
              </div>
              <div className="items-center justify-center gap-4 my-4 text-xs lg:flex">
                <Radio id="DN" name="type" label="Điện Nước" className="" />
                <Radio id="DL" name="type" label="Điện Lạnh" defaultChecked />
                <Radio id="DG" name="type" label="Đồ Gỗ" />
                <Radio id="XD" name="type" label="Xây Dựng" defaultChecked />
                <Radio id="Khac" name="type" label="Năng Lượng Và Khác" />
              </div>
              <div className="flex items-center justify-center ">
                <span className="sr-only">Chọn hình ảnh thực tế</span>
                <input type="file" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 " onChange={handleChange} />
                <img src={file} className="w-20 h-20"/>
              </div>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="justify-center space-x-2">
          <Button size="lg" className="w-11/12">Thêm</Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
export default FloatingButton;
