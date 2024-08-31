

// eslint-disable-next-line react/prop-types
const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white tracking-wide">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="mt-6">
                <span className="block w-24 h-1 mx-auto bg-blue-600"></span>
            </div>
        </div>
    );
};

export default SectionHeader;