import { siteConfig } from '@/config/site';

/** The one hours table — footer, contact page, and the schema all read the same rows. */
export function HoursTable({ dark = false }: { dark?: boolean }) {
  const muted = dark ? 'text-white/60' : 'text-muted';
  const strong = dark ? 'text-white' : 'text-foreground';
  return (
    <table className="w-full text-[15px]">
      <caption className="sr-only">Clinic hours</caption>
      <tbody>
        {siteConfig.hours.rows.map((r) => (
          <tr key={r.day} className={`border-b ${dark ? 'border-white/10' : 'border-border'}`}>
            <th scope="row" className={`py-2 pr-4 text-left font-medium ${strong}`}>{r.day}</th>
            <td className={`py-2 text-right tt-mono text-[0.9rem] ${r.open ? strong : muted}`}>
              {r.label}
              {'note' in r && r.note ? <span className={`block text-xs font-body ${muted}`}>{r.note}</span> : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
