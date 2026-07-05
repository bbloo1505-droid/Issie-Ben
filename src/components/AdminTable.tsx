import { Download } from 'lucide-react';
import { exportToCsv } from '../lib/store';
import { Button } from './Button';

type Column<T> = {
  header: string;
  render: (row: T) => React.ReactNode;
};

type AdminTableProps<T> = {
  title: string;
  description?: string;
  rows: T[];
  columns: Column<T>[];
  csvFilename: string;
  csvRows: Record<string, unknown>[];
  emptyMessage?: string;
};

export function AdminTable<T extends { id: string }>({
  title,
  description,
  rows,
  columns,
  csvFilename,
  csvRows,
  emptyMessage = 'No entries yet.'
}: AdminTableProps<T>) {
  return (
    <section className="rounded-lg border border-border-cream bg-linen">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border-cream px-5 py-4">
        <div>
          <h2 className="text-2xl text-forest">{title}</h2>
          {description ? <p className="mt-0.5 text-sm text-muted">{description}</p> : null}
        </div>
        <Button
          type="button"
          variant="secondary"
          className="!px-4 !py-2"
          disabled={csvRows.length === 0}
          onClick={() => exportToCsv(csvFilename, csvRows)}
        >
          <Download size={13} aria-hidden="true" /> Export CSV
        </Button>
      </header>
      {rows.length === 0 ? (
        <p className="px-5 py-8 text-center text-sm text-muted">{emptyMessage}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-cream">
                {columns.map((col) => (
                  <th
                    key={col.header}
                    scope="col"
                    className="whitespace-nowrap px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-border-cream/60 last:border-0">
                  {columns.map((col) => (
                    <td key={col.header} className="px-5 py-3 align-top text-forest">
                      {col.render(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
