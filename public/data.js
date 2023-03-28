import { CiStethoscope } from "react-icons/ci";
import { MdAirlineSeatLegroomExtra} from "react-icons/md";
import { GiHeartOrgan,GiTripleNeedle,GiSkeletalHand,GiMedicines} from "react-icons/gi";
import { IoNutritionOutline} from "react-icons/io";
export const MenuLink = [
    {
        title:'Trang chủ',
        link:'/',
    },
    {
        title:'Chuyên khoa',
        list:[
            {
                title:'Đa khoa',
                link:'/'
            },
            {
                title:'Tai - Mũi - Họng',
                link:'/'
            },
            {
                title:'Thần kinh',
                link:'/'
            }
        ]
    },
    {
        title:'Bác sĩ',
       link:'/'
    },
    {
        title:'Tuyển dụng',
       link:'/'
    },
    {
        title:'Tin tức',
       link:'/'
    },
    {
        title:'Khác',
       link:'/'
    }
]
export const departments = [
    {
        id:1,
        name: "Khoa Khám bệnh",
        description:[
            "Khám chữa bệnh đa khoa, kết hợp y học cổ truyền với y học hiện đại.",
            "Khám cấp giấy chứng nhận sức khỏe.",
            "Hợp đồng khám sức khỏe cho các cơ quan, doanh nghiệp, trường học,…",
            "Khám các chuyên khoa: Răng hàm mặt, tai mũi họng, mắt, phụ khoa, …"
        ],
        icon:<CiStethoscope/>,
    },
    {
        id:2,
        name: "Khoa Ngoại phụ",
        description:[
            "Điều trị bệnh hậu môn, trực tràng.",
            "Bệnh phụ khoa, nam khoa, vô sinh hiếm muộn.",
            "Bệnh hệ sinh dục, tiết niệu, da liễu.",
            "Bệnh ngũ quan, chấn thương.",
            "Bệnh cơ xương khớp."
        ],
        icon:<MdAirlineSeatLegroomExtra/>,
    },
    {
        id:3,
        name: "Khoa Nội tổng hợp",
        description:[
            "Các bệnh lý tim mạch.",
            "Bệnh lý xương khớp.",
            "Bệnh rối loạn chuyển hóa.",
            "Các bệnh đường tiêu hóa.",
            "Các bệnh về thần kinh."
        ],
        icon:<GiHeartOrgan/>,
    },
    {
        id:4,
        name: "Khoa Châm cứu - PHCN",
        description:[
            "Di chứng liệt (Di chứng tai biến mạch máu não, chấn thương cột sống, chấn thương sọ não).",
            "Mất chức năng vận động sau tai nạn giao thông, tai nạn sinh hoạt.",
            "Thoát vị đĩa đệm, thoái hóa cột sống cổ, cột sống thắt lưng.",
        ],
        icon:<GiTripleNeedle/>,
    },
    {
        id:5,
        name: "Khoa Xét nghiệm & Chẩn đoán hình ảnh",
        description:[
            "Chẩn đoán hình ảnh: Siêu âm ổ bụng,Siêu âm thai,Siêu âm Dopler mạch,…",
            "Thăm dò chức năng: Điện não đồ, Loãng xương, điện tim, nội soi dạ dày,…",
            "Xét nghiệm: Glucose, cholesterol, Nhóm máu, Acid uric,…",
        ],
        icon:<GiSkeletalHand/>,
    },
    {
        id:6,
        name: "Khoa Dược",
        description:[
            "Bào chế , sản xuất thuốc cổ truyền, thuốc dược liệu.",
            "Cơ sở thực hành của các trường Đại học, Cao đẳng và Trung học về dược.",
        ],
        icon:<GiMedicines/>,
    },
    {
        id:7,
        name: "Khoa Dinh dưỡng",
        description:[
            "Tư vấn và điều trị bằng chế độ dinh dưỡng.",
            "Truyền thông về dinh dưỡng và an toàn thực phẩm,…",
        ],
        icon:<IoNutritionOutline/>,
    },

]
