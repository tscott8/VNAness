var descriptions = {
	"top" : "The body of a laptop is what the user actually sees and interacts with. It contains many peripherals for interactions such as the keyboard, touchpad, screen, and various types of ports (usb, hdmi, ethernet, etc).",
	"motherboard" : "A motherboard is the main printed circuit board (PCB) found in general purpose microcomputers and other expandable systems. It holds and allows communication between many of the crucial electronic components of a system, such as the central processing unit (CPU) and memory, and provides connectors for other peripherals. Unlike a backplane, a motherboard usually contains significant sub-systems such as the central processor, the chipset's input/output and memory controllers, interface connectors, and other components integrated for general purpose use.",
	"gpu" : "A graphics processing unit (GPU), is a specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display. GPUs are used in embedded systems, mobile phones, personal computers, workstations, and game consoles. Modern GPUs are very efficient at manipulating computer graphics and image processing, and their highly parallel structure makes them more effective than general-purpose CPUs for algorithms where the processing of large blocks of visual data is done in parallel. In a personal computer, a GPU can be present on a video card, or it can be embedded on the motherboard or/in certain CPUs. GPUs require more cooling and power than an iternal graphics chip",
	"cpu" : "A central processing unit (CPU) is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logical, control and input/output (I/O) operations specified by the instructions. Nowadays, most CPUs come with an internal graphics chip that is significantly less powerful than a dedicated GPU, but can handle most day to day tasks.",
	"ram" : "RAM (random access memory) is the place in a computer where the operating system, application programs, and data in current use are kept so that they can be quickly reached by the computer's processor. RAM is much faster to read from and write to than the other kinds of storage in a computer, the hard disk, floppy disk, and CD-ROM. However, the data in RAM stays there only as long as your computer is running. When you turn the computer off, RAM loses its data. When you turn your computer on again, your operating system and other files are once again loaded into RAM, usually from your hard disk. RAM can be compared to a person's short-term memory and the hard disk to the long-term memory. The short-term memory focuses on work at hand, but can only keep so many facts in view at one time. If short-term memory fills up, your brain sometimes is able to refresh it from facts stored in long-term memory. A computer also works this way. If RAM fills up, the processor needs to continually go to the hard disk to overlay old data in RAM with new, slowing down the computer's operation. Unlike the hard disk which can become completely full of data so that it won't accept any more, RAM never runs out of memory. It keeps operating, but much more slowly than you may want it to",
	"ssd" : "A hard disk drive (HDD) is a data storage device used for storing and retrieving digital information using one or more rigid (\"hard\") rapidly rotating disks (platters) coated with magnetic material. The platters are paired with magnetic heads arranged on a moving actuator arm which read and write data to the platter surfaces. Data is accessed in a random-access manner meaning that individual blocks of data can be stored or retrieved in any order and not only sequentially. HDDs are a type of non-volatile memory, retaining stored data even when powered off.",
	"bus" : "A bus (related to the Latin \"omnibus\", meaning \"for all\") is a communication system that transfers data between components inside a computer, or between computers. This expression covers all related hardware components (wire, optical fiber, etc.) and software, including communication protocols.",
	"dvd" : "stuff about dvd",
	"battery" : "A battery is a hardware component that supplies power to a device, enabling that device to work without a power cord. Batteries are often capable of powering a laptop computer for several hours depending on how much power it requires. Today, many high-end devices such as computer laptops and cell phones use rechargeable batteries that allow a user to recharge the battery once depleted of energy."
};

function getDescription(part) {
	console.log(part);
	console.log(descriptions[part]);
}
