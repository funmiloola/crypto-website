export default function Footer() {
    const getDate = new Date()
    const date = getDate.getFullYear()
    return (
        <div className="text-center border-t border-t-[#989898] py-3.75 px-4 text-[13px]">
            <p>{`Copyright @ ${date}, Cryptoplace- All Right Reserved.`}</p>
            </div>
    )
}