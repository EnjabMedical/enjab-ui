import { redirect } from "next/navigation";

// The Enjab changelog now lives in the central developer docs. This route only
// redirects there, so ui.enjab.ae no longer hosts the changelog itself.
export default function ChangelogPage() {
  redirect("https://developers.enjab.ae/docs/changelog");
}
