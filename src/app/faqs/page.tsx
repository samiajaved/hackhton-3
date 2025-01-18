export default function FAQ() {
    const faqs = [
      {
        question: "What types of chairs do you offer?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "Do your chairs come with a warranty?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "Can I try a chair before purchasing?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "How can we get in touch with you?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "What will be delivered? And when?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "How do I clean and maintain my Comforty chair?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
    ];
  
    return (
      <div className="flex justify-center py-10 bg-gray-50">
        <div className="max-w-[1200px] w-full">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4">
            Questions Looks Here
          </h2>
          <p className="text-gray-500 text-center mb-10 text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-sm p-4 lg:p-6 rounded-lg"
              >
                <h3 className="font-semibold text-base lg:text-lg mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
    