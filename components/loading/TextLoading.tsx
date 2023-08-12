const TextLoading = ({ length }: { length: number | string }) => {
    return <div className={`w-${length} h-6 bg-slate-100`}></div>;
};

export default TextLoading;
