import image_1 from '../../assets/res_1.png'
import image_2 from '../../assets/res_2.jpg'
import image_3 from '../../assets/res_3.jpg'

const callouts = [
  {
    name: 'Fine Dining',
    description: 'Experience gourmet cuisine with a luxury touch.',
    imageSrc: image_1,
    imageAlt: 'Elegant restaurant table setting with wine glasses and candles.',
    href: '#',
  },
  {
    name: 'Street Food Favourites',
    description: 'Discover the most loved local street food spots.',
    imageSrc: image_2,
    imageAlt: 'Variety of colorful street food dishes served on a table.',
    href: '#',
  },
  {
    name: 'Cafés & Bakeries',
    description: 'Relax with coffee, pastries, and cozy vibes.',
    imageSrc: image_3,
    imageAlt: 'Cup of coffee with latte art and fresh croissants on a wooden table.',
    href: '#',
  },
]


export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Famous Resturants</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



export function Review() {
  return (
    <div>
      <Example />
    </div>
  )
}

