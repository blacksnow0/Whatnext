const FAQSection = ({ faq }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-4xl font-bold">
        Frequently Asked Questions
      </h2>

      {faq.map((item, index) => (
        <div
          key={index}
          className="border border-zinc-200 rounded-2xl p-6"
        >
          <h3 className="font-semibold text-lg">
            {item.question}
          </h3>

          <p className="mt-3 text-zinc-600">
            {item.answer}
          </p>
        </div>
      ))}
    </section>
  );
};

export default FAQSection;