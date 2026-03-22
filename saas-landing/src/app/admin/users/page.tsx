import { ShellHeader } from "@/components/saas/layouts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { users } from "@/lib/mock-data";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <ShellHeader
        eyebrow="Users Manager"
        title="Manage accounts, access, and lifecycle status"
        description="The table is wired as a realistic admin starting point with plan badges, activity timestamps, and row-level actions."
      />
      <Card className="glass-panel overflow-hidden border-white/70 bg-white/78 py-0 dark:border-white/10 dark:bg-white/6">
        <CardHeader className="px-6 pt-6">
          <CardTitle className="font-heading text-2xl text-slate-950 dark:text-white">Users</CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-slate-500 dark:bg-white/6 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Plan</th>
                  <th className="px-6 py-4 font-medium">Signup date</th>
                  <th className="px-6 py-4 font-medium">Last active</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email} className="border-t border-slate-200/70 dark:border-white/10">
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900 dark:text-white">{user.name}</p>
                      <p className="text-slate-500 dark:text-slate-400">{user.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        className={
                          user.plan === "Enterprise"
                            ? "rounded-full bg-[#6C47FF] text-white"
                            : "rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                        }
                      >
                        {user.plan}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.signupDate}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.lastActive}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.status}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="outline" className="rounded-xl border-slate-200 bg-white px-3 text-xs dark:border-white/10 dark:bg-white/6">
                          Suspend
                        </Button>
                        <Button variant="destructive" className="rounded-xl px-3 text-xs">
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
