export default function LGContainer({ children }) {
    return (
        <div className="font-['Inter'] flex flex-col max-w-screen-lg mx-auto w-full h-fit">
            {children}
        </div>
    );
}
