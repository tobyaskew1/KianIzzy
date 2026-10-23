import { useState, type FormEvent } from "react";

const coupleImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAVeuWnHKqXBPpzH_ldnWXTruk3G6odNzN7jNAeZSwzaGZHKnH-BSN4B9l2pbZFSW2yuVcwQ2FW2ZuepLacrlVk6frmjh1ZzqHrIaC6bUCbbmf_cV9c1qCcFBJ8-j4SjlED4O9U9jKK1r7J_SBHntPKzF86Cua4q1FNs1s40mbPWkX5LydYvnKVShN3EpbagDRWlX5VSuS9I9p58BGnSndxMMpA2nSc76eIvX0m_TeCf25Qv0xo1cDKKpRLaT0gCPrVYj4";

// const schedule = [
//   {
//     time: "3:00 PM",
//     occasion: "Arrival",
//     title: "Welcome Drinks & Garden Gathering",
//     description:
//       "Arrive early to enjoy chilled local ciders, herbal spritzes, and live acoustic strings on the west meadow lawn.",
//   },
//   {
//     time: "4:00 PM",
//     occasion: "Ceremony",
//     title: "Vows Under the Pines",
//     description:
//       "Unplugged outdoor ceremony beneath the cathedral pine grove. We kindly request phones remain resting during this time.",
//   },
//   {
//     time: "5:00 PM",
//     occasion: "Aperitifs",
//     title: "Cocktail Hour & Lawn Amuse-Bouches",
//     description:
//       "Seasonal craft cocktails, wood-fired tartines, charcuterie, and lawn bocce while the golden hour settles over the valley.",
//   },
//   {
//     time: "6:30 PM",
//     occasion: "Dinner",
//     title: "Farm-to-Table Feast & Speeches",
//     description:
//       "Family-style communal dining inside the glasshouse pavilion. Locally sourced harvest vegetables, braised Hudson fare, and toasts.",
//   },
//   {
//     time: "9:00 PM",
//     occasion: "Celebration",
//     title: "Dancing, Bonfire & Hearthside Send-off",
//     description:
//       "Live eight-piece band followed by open hearth cider donuts, hot toddies, and sparklers beneath the stars.",
//   },
// ];

const location = "Brampton Grange";

// const stays = [
//   { label: 'Primary Room Block', name: 'Hasbrouck House', location: 'Stone Ridge, NY · 8 mins from venue', description: '18th-century Dutch colonial stone mansion with twenty-five bespoke boutique suites, bluestone pool, and tavern.', code: 'ALEXJAMIE28', action: 'Reserve Room' },
//   { label: 'Modern Riverside', name: 'Inness Hotel & Grounds', location: 'Accord, NY · 12 mins from venue', description: 'Scandinavian-inspired pastoral cabins set across rolling meadows with hiking paths, sauna spa, and panoramic ridge sunsets.', code: 'WOODLAND28', action: 'Reserve Cabin' },
//   { label: 'Shuttle Transportation', name: 'Charter Schedule', location: 'Roundtrip transfers provided', description: 'Executive shuttles will run continuously between Hasbrouck House, Inness, and the Estate from 2:15 PM until 1:00 AM.', code: 'No personal driving needed', action: 'Schedule in welcome bag' },
// ]

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-16 max-w-xl text-center">
      <span
        className={`font-sans text-xs font-medium uppercase tracking-[0.25em] ${dark ? "text-[#d7c4a8]" : "text-olive"}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-2 font-serif text-4xl font-normal sm:text-5xl ${dark ? "text-linen-50" : "text-walnut"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm font-light text-walnut/60">{subtitle}</p>
      )}
    </div>
  );
}

function App() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen overflow-hidden font-sans text-walnut-dark antialiased selection:bg-olive selection:text-linen-50">
      <header className="sticky top-0 z-50 border-b border-[#ebdcc8]/70 bg-[#fbf8f2]/90 backdrop-blur-md">
        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a
            className="group flex items-center"
            href="#top"
            aria-label="Kian and Izzy home"
          >
            <span className="font-serif text-xl font-medium uppercase tracking-[0.18em] text-walnut transition-colors group-hover:text-olive sm:text-2xl">
              Kian{" "}
              <span className="font-script text-3xl lowercase tracking-normal text-olive">
                &
              </span>{" "}
              Izzy
            </span>
          </a>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 text-xs font-medium uppercase tracking-[0.18em] text-walnut/80 md:flex lg:gap-10">
            <a className="transition-colors hover:text-olive" href="#story">
              Our story
            </a>
            <a className="transition-colors hover:text-olive" href="#schedule">
              Schedule
            </a>
            <a className="transition-colors hover:text-olive" href="#venue">
              Venue & Attire
            </a>
          </nav>
          <a
            className="rounded-full bg-olive px-6 py-2.5 text-xs uppercase tracking-[0.18em] text-linen-100 shadow-sm transition hover:bg-olive-dark hover:shadow"
            href="#rsvp"
          >
            RSVP
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden pb-24 pt-12 lg:pb-36 lg:pt-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
            <div className="z-10 space-y-6 text-center lg:col-span-5 lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-olive">
                <span className="h-px w-8 bg-olive" />
                The Wedding Celebration of, 
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.08] text-walnut-dark sm:text-6xl xl:text-7xl">
                Kian <span className="block font-light italic">& Izzy</span>
              </h1>
              <p className="font-serif text-xl italic text-olive-dark sm:text-2xl">
                May 12, 2028 — {location}, Chapel Brampton
              </p>
              <p className="mx-auto max-w-md text-sm font-light leading-relaxed text-walnut/75 lg:mx-0">
                Surrounded by wild pine meadows, warm candlelight, and our
                dearest loved ones. We invite you to share this sacred autumn
                weekend with us.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
                <a
                  className="w-full rounded-full bg-olive px-8 py-3.5 text-center text-xs uppercase tracking-[0.18em] text-linen-100 shadow transition hover:bg-olive-dark hover:shadow-md sm:w-auto"
                  href="#rsvp"
                >
                  Confirm Attendance
                </a>
                <a
                  className="w-full rounded-full border border-walnut/30 px-8 py-3.5 text-center text-xs uppercase tracking-[0.18em] text-walnut transition hover:border-walnut sm:w-auto"
                  href="#story"
                >
                  Explore Weekend
                </a>
              </div>
            </div>
            <div className="relative mt-2 h-170 w-full lg:col-span-7 md:mt-0 md:h-150 md:max-lg:h-170">
              <div className="absolute left-1/2 top-1/2 z-20 aspect-3/4 w-60 -translate-x-1/2 -translate-y-1/2 rotate-2 overflow-hidden rounded-lg bg-surface shadow-2xl transition-transform duration-500 ease-out hover:rotate-0 md:w-72 md:max-lg:w-52">
<img
  src={`${import.meta.env.BASE_URL}images/weddingPhoto.jpg`}
  alt="Bride and Groom at a wedding"
  className="block h-full w-full object-cover"
/>
              </div>
              <div className="absolute left-0 top-0 z-10 aspect-3/4 w-40 -rotate-6 overflow-hidden rounded-lg bg-surface opacity-90 shadow-xl transition-transform duration-500 ease-out hover:rotate-0 md:-left-8 md:top-20 md:w-56 md:max-lg:left-0 md:max-lg:top-16 md:max-lg:w-36">
<img
  src={`${import.meta.env.BASE_URL}images/holidayPhoto.jpg`}
  alt="Bride and Groom on holiday"
  className="block h-full w-full object-cover"
/>
              </div>
              <div className="absolute right-0 bottom-4 z-30 aspect-3/4 w-40 -rotate-3 overflow-hidden rounded-lg bg-surface opacity-95 shadow-lg transition-transform duration-500 ease-out hover:rotate-0 md:-right-8 md:bottom-20 md:w-56 md:max-lg:right-0 md:max-lg:bottom-12 md:max-lg:w-36">
<img
  src={`${import.meta.env.BASE_URL}images/autumnPhoto.jpg`}
  alt="Bride and Groom on an autumn photoshoot"
  className="block h-full w-full object-cover"
/>
              </div>
            </div>
            {/* <div className="relative flex items-center justify-center lg:col-span-7">
              <div className="arch-mask relative h-110 w-72 border-4 border-white bg-linen-200 shadow-2xl sm:h-125 sm:w-80 md:w-96">
                <img
                  alt="Kian and Izzy embracing in a meadow"
                  className="h-full w-full object-cover object-top contrast-[1.03]"
                  src={coupleImage}
                />
              </div>
              <div className="polaroid-card absolute -bottom-6 -left-2 z-20 hidden w-44 -rotate-6 sm:left-4 sm:block sm:w-56">
                <div className="aspect-square overflow-hidden bg-linen-200">
                  <img
                    alt="Autumn bouquet details"
                    className="h-full w-full object-cover object-center sepia-[0.15]"
                    src={coupleImage}
                  />
                </div>
                <p className="mt-3 text-center font-script text-lg leading-tight text-walnut">
                  {location},<br /> May 2028
                </p>
              </div>
              <div className="absolute -top-4 right-2 z-10 max-w-42.5 rotate-3 rounded-sm border border-[#ddccb4] bg-linen-100 p-4 text-center shadow-lg sm:right-6">
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-sage">
                  Gathering At
                </span>
                <span className="font-serif text-sm font-medium text-walnut">
                  {location}
                </span>
                <span className="mt-1 block text-[11px] text-walnut/60">
                  13:20
                </span>
              </div>
            </div> */}
          </div>
        </section>

        <section
          className="torn-top relative border-y border-walnut/60 bg-walnut-dark py-24 text-[#f4f0e6]"
          id="story"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="" title="How It All Began" dark />
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-14">
              <div className="relative flex justify-center md:col-span-5">
                <div className="polaroid-card w-64 rotate-2 bg-white text-walnut shadow-2xl sm:w-72">
                  <div className="aspect-4/5 overflow-hidden bg-linen-200">
                    <img
                      alt="Couple walking hand in hand"
                      className="h-full w-full object-cover object-bottom"
                      src={coupleImage}
                    />
                  </div>
                  <p className="mt-3.5 text-center font-serif text-sm italic tracking-wide text-walnut">
                    “A walk through upstate trails that turned into forever.”
                  </p>
                </div>
                <div className="absolute -bottom-4 -left-2 rotate-[-4deg] rounded bg-[#d7c4a8] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#241c18] shadow">
                  Established 2021
                </div>
              </div>
              <div className="space-y-6 font-light leading-relaxed text-[#f4f0e6]/80 md:col-span-7">
                <h3 className="font-serif text-2xl font-normal italic text-linen-50 sm:text-3xl">
                  From coffee in the West Village to sunset vows under the
                  pines.
                </h3>
                <p className="text-sm text-linen-300 sm:text-base">
                  We met over a spilled cortado at a corner cafe seven Octobers
                  ago. What was meant to be a brisk twenty-minute introduction
                  evolved into six hours of uninterrupted conversation about
                  indie cinema, road trips, and antique botanical prints.
                </p>
                <p className="text-sm text-linen-300 sm:text-base">
                  Four apartments, dozens of weekend escapes into the Hudson
                  River Valley, and one very energetic rescue pup named Cedar
                  later, Kian proposed on a misty ridge overlooking the Catskill
                  canopy. We cannot imagine beginning this next chapter anywhere
                  else than amongst the pines with you.
                </p>
                <div className="mt-6 border-l-2 border-[#d7c4a8] py-2 pl-5">
                  <p className="font-serif text-lg italic text-linen-50">
                    “In all the world, there is no heart for me like yours. In
                    all the world, there is no love for you like mine.”
                  </p>
                  <span className="mt-2 block text-xs uppercase tracking-widest text-[#d7c4a8]/70">
                    — Maya Angelou
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24" id="schedule">
          <SectionHeading
            eyebrow="Timeline of Events"
            title="Friday Celebration"
            subtitle={`May 12, 2028 · ${location}`}
          />
          <p className="font-serif text-xl text-walnut sm:text-2xl text-center">
            Please come back here at a later date to see the timeline for the
            day!
          </p>
          {/* <div className="relative ml-4 space-y-12 border-l border-olive/30 sm:ml-32 md:ml-44">
            {schedule.map((event) => (
              <div className="group relative pl-8 sm:pl-10" key={event.time}>
                <div className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-linen-50 bg-olive" />
                <div className="top-0 sm:absolute sm:-left-44 sm:w-36 sm:text-right">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-olive">
                    {event.time}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-walnut/50">
                    {event.occasion}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-walnut sm:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-1 max-w-lg text-sm font-light text-walnut/70">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </section>

        <section
          className="border-y border-[#ebdcc8] bg-linen-100/60 py-24"
          id="venue"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-olive">
                  The Venue
                </span>
                <h2 className="font-serif text-4xl font-normal leading-tight text-walnut sm:text-5xl">
                  {location}, <br /> Chapel Brampton
                </h2>
                <p className="text-sm font-light leading-relaxed text-walnut/80">
                  Nestled at the base of the Shawangunk Ridge, the estate
                  features over 120 acres of protected pine woods, a restored
                  19th-century timber glasshouse, and panoramic mountain vistas.
                </p>
                <div className="space-y-2 pb-4 pt-2 text-xs text-walnut/80">
                  <p className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 rounded-full bg-olive" />
                    <span>
                      <strong>Address:</strong> Sandy Ln, Chapel Brampton,
                      Northampton NN6 8AD
                    </span>
                  </p>
                </div>
                <div className="space-y-4 rounded-sm border border-[#e4d7c5] bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-medium text-walnut">
                    Dress Code: Autumn Earth Editorial
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-walnut/70">
                    Semi-formal / formal garden attire. We encourage warm,
                    nature-inspired hues: muted forest greens, warm sepia,
                    toasted walnut, oat, clay, and taupe.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    {[
                      ["Olive", "#39422f"],
                      ["Walnut", "#524133"],
                      ["Sage", "#8c957e"],
                      ["Linen", "#d7c4a8"],
                      ["Terracotta", "#8b5a3c"],
                    ].map(([name, color]) => (
                      <div className="text-center" key={name}>
                        <div
                          className="h-10 w-10 rounded-full border border-white shadow-inner"
                          style={{ backgroundColor: color }}
                        />
                        <span className="mt-1 block text-[10px] uppercase tracking-wider text-walnut/70">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  className="inline-flex items-center pt-2 text-xs font-semibold uppercase tracking-widest text-olive hover:underline"
                  href="https://maps.app.goo.gl/nvx6dCxhzrNii6yQA"
                  rel="noreferrer"
                  target="_blank"
                >
                  Open in Google Maps <span className="ml-2">→</span>
                </a>
              </div>
              <div className="relative flex justify-center lg:col-span-6">
                <div className="arch-mask relative h-115 w-80 border-8 border-white bg-linen-200 shadow-xl sm:w-96">
                  <img
                    alt="Venue scenery in the Hudson Valley"
                    className="h-full w-full object-cover object-center saturate-90"
                    src={`${import.meta.env.BASE_URL}images/venue.jpg`}
                  />
                </div>
                <div className="absolute -bottom-5 right-4 rotate-2 rounded-sm border border-[#e2d5c2] bg-linen-50 px-5 py-3 shadow-md sm:right-8">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-walnut/60">
                    Chapel Brampton
                  </span>
                  <span className="font-serif font-medium text-walnut">
                    {location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative border-t border-[#ebdcc8] bg-[#efe8dc] py-24 text-walnut"
          id="rsvp"
        >
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading
              eyebrow="Kindly Respond"
              title="RSVP"
              subtitle="Please let us know your plans by January 31, 2028."
            />
            <div className="rounded-sm border border-[#e4d7c5] bg-white p-8 shadow-xl sm:p-12">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    className="block text-xs font-medium uppercase tracking-widest text-walnut"
                    htmlFor="guest-names"
                  >
                    Full Name(s) of Household Guests
                  </label>
                  <input
                    className="w-full rounded-none border border-[#d7c4a8] bg-[#fbf9f4] px-4 py-3 text-sm text-walnut outline-none transition placeholder:text-walnut/40 focus:border-olive focus:ring-1 focus:ring-olive"
                    id="guest-names"
                    name="names"
                    placeholder="e.g. Katherine & Julian Vance"
                    required
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="block text-xs font-medium uppercase tracking-widest text-walnut"
                      htmlFor="guest-email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-none border border-[#d7c4a8] bg-[#fbf9f4] px-4 py-3 text-sm text-walnut outline-none transition placeholder:text-walnut/40 focus:border-olive focus:ring-1 focus:ring-olive"
                      id="guest-email"
                      name="email"
                      placeholder="name@domain.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block text-xs font-medium uppercase tracking-widest text-walnut"
                      htmlFor="party-count"
                    >
                      Number of Attendees
                    </label>
                    <select
                      className="w-full rounded-none border border-[#d7c4a8] bg-[#fbf9f4] px-4 py-3 text-sm text-walnut outline-none transition focus:border-olive focus:ring-1 focus:ring-olive"
                      defaultValue="2"
                      id="party-count"
                      name="attendees"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>
                <fieldset className="space-y-3">
                  <legend className="block text-xs font-medium uppercase tracking-widest text-walnut">
                    Attendance
                  </legend>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="flex cursor-pointer items-center rounded border border-[#e4d7c5] bg-[#fbf9f4] p-4 transition hover:border-olive/50 hover:bg-linen-100">
                      <input
                        className="border-[#d7c4a8] bg-white text-olive focus:ring-olive"
                        defaultChecked
                        name="attendance"
                        type="radio"
                        value="attending"
                      />
                      <span className="ml-3 text-sm font-medium text-walnut">
                        Joyfully Accepts
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center rounded border border-[#e4d7c5] bg-[#fbf9f4] p-4 transition hover:border-olive/50 hover:bg-linen-100">
                      <input
                        className="border-[#d7c4a8] bg-white text-olive focus:ring-olive"
                        name="attendance"
                        type="radio"
                        value="declining"
                      />
                      <span className="ml-3 text-sm font-medium text-walnut">
                        Regretfully Declines
                      </span>
                    </label>
                  </div>
                </fieldset>
                <div className="space-y-2">
                  <label
                    className="block text-xs font-medium uppercase tracking-widest text-walnut"
                    htmlFor="dietary-notes"
                  >
                    Dietary Requirements & Notes
                  </label>
                  <textarea
                    className="w-full rounded-none border border-[#d7c4a8] bg-[#fbf9f4] px-4 py-3 text-sm text-walnut outline-none transition placeholder:text-walnut/40 focus:border-olive focus:ring-1 focus:ring-olive"
                    id="dietary-notes"
                    name="notes"
                    placeholder="Vegetarian, vegan, gluten-free, allergies, or songs to hear on the dance floor..."
                    rows={3}
                  />
                </div>
                <div className="pt-2 text-center">
                  <button
                    className="w-full min-w-60 rounded-full bg-olive px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-linen-100 shadow-md transition duration-200 hover:bg-olive-dark hover:shadow-lg sm:w-auto"
                    type="submit"
                  >
                    Send RSVP
                  </button>
                </div>
                {submitted && (
                  <p
                    className="rounded-sm border border-olive bg-olive/20 p-4 text-center text-sm text-walnut-dark"
                    role="status"
                  >
                    Thank you! Your RSVP has been graciously received. We look
                    forward to celebrating together.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-walnut/60 bg-walnut-dark py-16 text-linen-100">
        <div className="mx-auto max-w-5xl space-y-8 px-6 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-linen-300/30">
            <span className="font-serif text-xl uppercase tracking-widest">
              K&I
            </span>
          </div>
          <div className="space-y-2">
            <p className="font-serif text-2xl font-light uppercase tracking-widest">
              Kian & Izzy
            </p>
            <p className="text-xs font-light uppercase tracking-[0.25em] text-linen-300/60">
              12 . 05 . 2028 · {location}
            </p>
          </div>
          <p className="mx-auto max-w-md font-script text-2xl text-linen-200/80">
            “We cannot wait to celebrate our favorite day with our favorite
            people.”
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
