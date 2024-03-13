function Navbar( {onPageChange} ) {
    return (
        <div class = 'bg-green-800 text-white indent-8 flex flex-col justify-between'>

            <div class = 'flex justify-left items-center h-24'>
                <h1 class = 'text-2xl font-mono'>
                    Calcify
                </h1>
            </div>

            <div class = 'bg-green-900'>
                <nav>
                    <ul class = 'items-center h-12 flex space-x-8 text-base'>
                        <li>
                            <a class = 'hover:bg-green-950 hover:rounded px-2 py-2' href = '#' onClick = {() => onPageChange('calculator')}>Calculator</a>
                        </li>
                        <li><a class = 'hover:bg-green-950 hover:rounded px-2 py-2' href = '#' onClick = {() => onPageChange('graphing')}>Graphing</a></li>
                    </ul>
                </nav>
            </div>

        </div>

    )
}

export default Navbar;
