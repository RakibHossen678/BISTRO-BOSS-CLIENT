
const Title = ({Heading,subHeading}) => {
    return (
        <div className="text-center py-8">
            <p className="text-[#D99904] font-inter  italic py-2">{subHeading}</p>
            <h3 className="border-t-4 border-b-4 py-4 mx-auto max-w-sm my-4 border-t-[#E8E8E8] border-b-[#E8E8E8] text-[#151515] font-inter text-3xl font-medium">{Heading}</h3>
        </div>
    );
};

export default Title;