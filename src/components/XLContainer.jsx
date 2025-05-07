export default function XLContainer({ children }) {
    return (
        <div className="font-['Inter'] flex flex-col max-w-screen-xl mx-auto w-full h-fit">
            {children}
        </div>
    );
}
