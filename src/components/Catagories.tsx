import Image from "next/image"
import Link from "next/link"

export default function Catagories() {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none lg:grid-cols-4">
        <div className="grid gap-4 relative group">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <Image
            alt="Category 1"
            className="rounded-lg object-cover w-full aspect-[1/1] group-hover:opacity-50 transition-opacity"
            height={300}
            src="/placeholder.svg"
            width={300}
          />
          <div className="grid gap-1">
            <h3 className="font-semibold">Category 1</h3>
            <p className="text-sm leading-none">Description for Category 1.</p>
          </div>
        </div>
        <div className="grid gap-4 relative group">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <Image
            alt="Category 2"
            className="rounded-lg object-cover w-full aspect-[1/1] group-hover:opacity-50 transition-opacity"
            height={300}
            src="/placeholder.svg"
            width={300}
          />
          <div className="grid gap-1">
            <h3 className="font-semibold">Category 2</h3>
            <p className="text-sm leading-none">Description for Category 2.</p>
          </div>
        </div>
        <div className="grid gap-4 relative group">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <Image
            alt="Category 3"
            className="rounded-lg object-cover w-full aspect-[1/1] group-hover:opacity-50 transition-opacity"
            height={300}
            src="/placeholder.svg"
            width={300}
          />
          <div className="grid gap-1">
            <h3 className="font-semibold">Category 3</h3>
            <p className="text-sm leading-none">Description for Category 3.</p>
          </div>
        </div>
        <div className="grid gap-4 relative group">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <Image
            alt="Category 4"
            className="rounded-lg object-cover w-full aspect-[1/1] group-hover:opacity-50 transition-opacity"
            height={300}
            src="/placeholder.svg"
            width={300}
          />
          <div className="grid gap-1">
            <h3 className="font-semibold">Category 4</h3>
            <p className="text-sm leading-none">Description for Category 4.</p>
          </div>
        </div>
      </div>
    </section>
  )
}