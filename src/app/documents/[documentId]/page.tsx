import Editor from "./editor";

type DocumentPageProps = {
  params: Promise<{ documentId: string }>;
};

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { documentId } = await params;
  return (
    <div>
      DocumentPage ID: {documentId}
      <Editor />
    </div>
  );
}
