// Now let's create a function navbar, and we will copy it and paste in every file in our components folder.
const Loader = () => {
    return (
        <div className="flex justify-center items-center py-3">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700" />

        </div>
    );
}

export default Loader;