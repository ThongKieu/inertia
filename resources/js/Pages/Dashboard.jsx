import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FloatingButton from '@/Components/nav/floatingButton';
import React, { useState, useEffect } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    IconButton,
    Typography,
    Card
} from "@material-tailwind/react";
import {
    TrashIcon, PaintBrushIcon, PaperAirplaneIcon

} from "@heroicons/react/24/outline";
const TABLE_HEAD = ["Yêu Cầu Công Việc", "Địa Chỉ", "Quận", "Số Điện Thoại", "Thợ", "Hình Ảnh", "Chức Năng"];
const TABLE_HEAD_RIGHT = ["Nội Dung Công Việc", "BH", "Địa Chỉ KH", "KV", "Thanh Toán", "SDT", "KTV", "Chi", "Thu", "Số Phiếu Thu", "Chức Năng"];
var dataNew = [{
    idCV: Math.floor(Math.random() * 1000),
    yccv: "",
    diaChi: "",
    quan: "",
    sdt: "",
    KTV: "",
},
{
    idCV: Math.floor(Math.random() * 1000),
    yccv: "",
    diaChi: "",
    quan: "",
    sdt: "",
    KTV: ""
}, {
    idCV: Math.floor(Math.random() * 1000),
    yccv: "",
    diaChi: "",
    quan: "",
    sdt: "",
    KTV: ""
}, {
    idCV: Math.floor(Math.random() * 1000),
    yccv: "",
    diaChi: "",
    quan: "",
    sdt: "",
    KTV: ""
}, {
    idCV: Math.floor(Math.random() * 1000),
    yccv: "",
    diaChi: "",
    quan: "",
    sdt: "",
    KTV: ""
}, {
    idCV: Math.floor(Math.random() * 1000),
    yccv: "",
    diaChi: "",
    quan: "",
    sdt: "",
    KTV: ""
},]
const data = [
    {
        idCV: Math.floor(Math.random() * 1000),
        yccv: "Sửa Nhà",
        diaChi: "Trần Hưng Đạo",
        quan: "q1",
        sdt: "0947613923",
        BH: '1 t',
        dsThu: '1.500.000đ',
        dsChi: '500.000đ',
        soPhieuThu: '17.1717',
        tinhTrangTT: 'chua tt'
    },
    {
        idCV: Math.floor(Math.random() * 1000),
        yccv: "Sửa Máy Lạnh",
        diaChi: "15 Nguyễn Trãi",
        quan: "q1",
        sdt: "0947613923", BH: '1 t',
        dsThu: '1.500.000đ',
        dsChi: '500.000đ',
        soPhieuThu: '17.1717',
        tinhTrangTT: 'chua tt'
    },
    {
        idCV: Math.floor(Math.random() * 1000),
        yccv: "Sửa Điện",
        diaChi: "30 Trần Xuân Soạn",
        quan: "q7",
        sdt: "0947613923", BH: '1 t',
        dsThu: '1.500.000đ',
        dsChi: '500.000đ',
        soPhieuThu: '17.1717',
        tinhTrangTT: 'chua tt'
    },
    {
        idCV: Math.floor(Math.random() * 1000),
        yccv: "Sửa máy bớm nước",
        diaChi: "15 Phạm Thế Hiển",
        quan: "q8",
        sdt: "0947613923", BH: '1 t',
        dsThu: '1.500.000đ',
        dsChi: '500.000đ',
        soPhieuThu: '17.1717',
        tinhTrangTT: 'chua tt'
    },
    {
        idCV: Math.floor(Math.random() * 1000),
        yccv: "Sửa dốc dắt xe",
        diaChi: "456 Sư Vạn Hạnh",
        quan: "q10",
        sdt: "0947613923", BH: '1 t',
        dsThu: '1.500.000đ',
        dsChi: '500.000đ',
        soPhieuThu: '17.1717',
        tinhTrangTT: 'chua tt'
    },
    {
        idCV: Math.floor(Math.random() * 1000),
        yccv: "",
        diaChi: "",
        quan: "",
        sdt: "", BH: '1 t',
        dsThu: '1.500.000đ',
        dsChi: '500.000đ',
        soPhieuThu: '17.1717',
        tinhTrangTT: 'chua tt'
    },
];
const listWorker = [
    {
        idTho: 1,
        maNV: "A03",
        tenNV: "Có",
        hoVaDem: "Nguyen Xuan",
        linhVuc: "DN"

    },
    {
        idTho: 2,
        maNV: "A04",
        tenNV: "Tiền",
        hoVaDem: "Nguyen Xuan",
        linhVuc: "DN"

    }, {
        idTho: 3,
        maNV: "A05",
        tenNV: "Nhạc",
        hoVaDem: "Nguyen Xuan",
        linhVuc: "DN"

    },
    {
        idTho: 4,
        maNV: "A06",
        tenNV: "Thông",
        hoVaDem: "Nguyen Xuan",
        linhVuc: "DL"

    },
    {
        idTho: 5,
        maNV: "A07",
        tenNV: "Thống",
        hoVaDem: "Nguyen Xuan",
        linhVuc: "XD"

    }
]
export default function Dashboard({ auth }) {
    const [workData, setWorkData] = useState(dataNew)

    const [selectedOption, setSelectedOption] = useState();
    const [options, setOptions] = useState([]);
    // edit Table right
    const [worksData, setWorksData] = useState(data)
    const onChangeInputTableRight = (e, idCV) => {
        const { name, value } = e.target
        const editDataTableRight = worksData.map((item) =>
            item.idCV === idCV && name ? { ...item, [name]: value } : item
        )
        setWorksData(editDataTableRight)
    }

    const handleSubmitAddWork = (e) => {
        e.preventDefault();
        setWorksData(prev => {
            const newWorkData = [...prev, workData]
            const jsonNewData = JSON.stringify(newWorkData)
            localStorage.setItem('WorkData', jsonNewData)
            return newWorkData
        })
        setWorkData('')

    }
    const onChangeInput = (e, idCV) => {
        const { name, value } = e.target
        console.log('name', name)
        console.log('value', value)
        console.log('idCV', idCV)
        const editData = workData.map((item) =>
            item.idCV === idCV && name ? { ...item, [name]: value } : item
        )
        setWorkData(editData)
    }

    useEffect(() => {
        setOptions(listWorker);
    }, []);

    const handleOptionChange = (e, idTho) => {
        console.log(idTho);
        console.log("selected", selectedOption);
        setSelectedOption(e.target.value);
    };
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight - 100,

    });
    // setScreenSize(height);
    var heightScreenTV = screenSize.height;
    console.log('kich thuoc', heightScreenTV);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('api/web/works');
            const jsonData = await response.json();
            setWorkData(jsonData);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // -------------------------------
    const [open, setOpen] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Trang Chủ" />
            <div className={'  grid w-full  grid-flow-col overflow-scroll auto-cols-max mt-1'}>
                <Card className={'  grid w-full  grid-flow-col overflow-scroll auto-cols-max mt-1'} >
                    {/* bang ben trai  */}
                    <table className={`h-[${heightScreenTV}px] w-full text-left border-r-4 border-red-500 table-auto min-w-max`} style={{ height: `300px` }}>
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="p-1 text-sm font-normal leading-none border-b opacity-70 border-blue-gray-100 bg-blue-gray-50 w-fit">
                                        {head}
                                    </th>
                                ))}
                            </tr>

                        </thead>
                        <tbody>
                            {workData.map(({ id, work_content, street, phone_number, district, idCV, KTV, image_work_path }, index) => {
                                const isLast = index === data.length - 1;
                                const classes = isLast ? "w-fit " : "border-b border-blue-gray-50 w-fit";
                                const classGeneral1 = "border text-black p-1 rounded border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20 outline-none "
                                // convert string to obj -------------------
                                if (typeof image_work_path !== 'undefined') {
                                    var url_img = image_work_path?.split(',');
                                }
                                return (
                                    <tr key={id}>
                                        <td className={classes}>
                                            <input
                                                name='yccv'
                                                value={work_content}
                                                type="text"
                                                onChange={(e) => onChangeInput(e, idCV)}
                                                placeholder="Yêu Cầu Công Việc"
                                                className={classGeneral1}

                                            />
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <input
                                                name='diaChi'
                                                type="text"
                                                placeholder="Địa Chỉ"
                                                className={classGeneral1}
                                                value={street}
                                                onChange={(e) => onChangeInput(e, idCV)}
                                            />
                                        </td>
                                        <td className={classes}>

                                            <input
                                                name='quan'
                                                type="text"
                                                placeholder="Quận"
                                                className={`${classGeneral1} text-center w-12`}
                                                value={district}
                                                onChange={(e) => onChangeInput(e, idCV)}
                                            />
                                        </td>
                                        <td className={classes}>
                                            <input
                                                name='sdt'
                                                type="text"
                                                placeholder="Số Điện Thoại"
                                                className={`${classGeneral1} w-28 text-center`}
                                                value={phone_number}
                                                onChange={(e) => onChangeInput(e, idCV)}
                                            />
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50 w-20`}>
                                            <input
                                                name='KTV'
                                                type="text"
                                                placeholder="KTV"
                                                className={`${classGeneral1} w-16 text-center`}
                                                value={KTV}
                                                onChange={(e) => onChangeInput(e, idCV)}
                                            />

                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50 w-20`}>
                                            {
                                                url_img?.map((item, index) => {
                                                    if (item !== '') {
                                                        return <div>
                                                            <Avatar className="inline-block overflow-hidden transition-opacity cursor-pointer h-9 w-9 hover:opacity-90" src={item} alt="avatar" variant="rounded"  onClick={handleOpen}/>
                                                            <Dialog size="xl" open={open} handler={handleOpen} className='w-1/2'>
                                                                <DialogBody divider={true} className="p-2 text-center ">
                                                                    <img key={index} src={item} alt="" className='inline-block w-1/2' />
                                                                </DialogBody>
                                                            </Dialog>

                                                        </div>
                                                    }
                                                })
                                            }
                                        </td>
                                        <td className={`w-32 ${classes} `}>
                                            <Button variant="outlined" className='p-1 mr-1 text-red-500 border-red-500 border-none'><TrashIcon className='w-4 h-4' /> </Button>
                                            <Button variant="outlined" className='p-1 text-blue-500 border-blue-500 border-none ' onClick={e => handleSubmitAddWork(e, idCV)}><PaperAirplaneIcon className='w-4 h-4' /></Button>
                                        </td>

                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </Card>
                <Card className={'  grid w-full  grid-flow-col overflow-scroll auto-cols-max mt-1'} >
                    {/* bang ben phai */}
                    <table className="w-full text-left table-auto min-w-max " style={{ height: `${heightScreenTV}px` }}>
                        <thead>
                            <tr>
                                {TABLE_HEAD_RIGHT.map((head) => (
                                    <th key={head} className="p-1 text-sm font-normal leading-none border-b opacity-70 border-blue-gray-100 bg-blue-gray-50">
                                        {head}
                                    </th>
                                ))}
                            </tr>

                        </thead>
                        <tbody>
                            {worksData.map(({ yccv, diaChi, sdt, quan, idCV, dsChi, dsThu, BH, tinhTrangTT, soPhieuThu }, index) => {
                                const isLast = index === data.length - 1;
                                const classes = isLast ? "p-1 w-3 " : "p-1 border-b border-blue-gray-50 w-3";
                                const classGeneral = "border  p-1 rounded border-blue-gray-50 bg-white text-black shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20 outline-none "
                                return (
                                    <tr key={index}>

                                        <td className={classes}>
                                            <input
                                                name='yccv'
                                                value={yccv ?? ''}
                                                type="text"
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                                placeholder="Nội Dung Công Việc"
                                                className={classGeneral}

                                            />
                                        </td>
                                        <td className={classes}>

                                            <input
                                                name='BH'
                                                type="text"
                                                placeholder="BH"
                                                className={`${classGeneral} text-center w-12`}
                                                value={BH ?? ''}
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                            />
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <input
                                                name='diaChi'
                                                type="text"
                                                placeholder="Địa Chỉ"
                                                className={classGeneral}

                                                value={diaChi ?? ''}
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                            />
                                        </td>

                                        <td className={classes}>

                                            <input
                                                name='quan'
                                                type="text"
                                                placeholder="Quận"
                                                className={`${classGeneral} text-center w-12`}
                                                value={quan ?? ''}
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                            />
                                        </td>
                                        <td className={classes}>

                                            <input
                                                name='tinhTrangTT'
                                                type="text"
                                                placeholder=""
                                                className={`${classGeneral} text-center w-16`}
                                                value={tinhTrangTT ?? ''}
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                            />
                                        </td>
                                        <td className={classes}>
                                            <input
                                                name='sdt'
                                                type="text"
                                                placeholder="Số Điện Thoại"
                                                className={`${classGeneral} w-28 text-center`}
                                                value={sdt ?? ''}
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                            />
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50 w-20`}>
                                            {/* <p>{listNV.map((itemNV)=>{
                                            <p  value={itemNV.idTho}>{itemNV.tenNV}</p>
                                            console.log('nhan vien:',itemNV.tenNV);
                                        })}</p> */}
                                            <select id={idCV} value={selectedOption} onChange={(e) => handleOptionChange(e, idCV)} className={classGeneral}>
                                                <option value="">Chọn</option>
                                                {options.map((option, index) => (
                                                    <option key={index} value={option.tenNV}>
                                                        {option.tenNV}
                                                    </option>
                                                ))}
                                            </select>

                                        </td>
                                        <td className={classes}>
                                            <input
                                                name='dsChi'
                                                type="text"
                                                placeholder="Chi"
                                                className={`${classGeneral} w-28 text-center`}
                                                value={dsChi}
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                            />
                                        </td>
                                        <td className={classes}>
                                            <input
                                                name='dsThu'
                                                type="text"
                                                placeholder="Thu"
                                                className={`${classGeneral} w-28 text-center`}
                                                value={dsThu}
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                            />
                                        </td>
                                        <td className={classes}>
                                            <input
                                                name='soPhieuThu'
                                                type="text"
                                                placeholder="Thu"
                                                className={`${classGeneral} w-28 text-center`}
                                                value={soPhieuThu}
                                                onChange={(e) => onChangeInputTableRight(e, idCV)}
                                            />
                                        </td>

                                        <td className={`w-32 ${classes} `}>
                                            <Button variant="outlined" className='p-1 mr-1 text-red-500 border-red-500 border-none'><TrashIcon className='w-4 h-4' /> </Button>
                                            <Button variant="outlined" className='p-1 text-blue-500 border-blue-500 border-none '><PaintBrushIcon className='w-4 h-4' /></Button>


                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </div>
            <div className='fixed bottom-2 right-2'>
                <FloatingButton />
            </div>
        </AuthenticatedLayout>
    );
}
