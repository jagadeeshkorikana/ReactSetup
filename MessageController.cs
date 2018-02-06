using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;

namespace bots04022018
{
    [BotAuthentication]
    public class MessagesController : ApiController
    {
        /// <summary>
        /// POST: api/Messages
        /// Receive a message from a user and reply to it
        /// </summary>
        public async Task<HttpResponseMessage> Post([FromBody]Activity activity)
        {
            if (activity.Type == ActivityTypes.Message)
            {
                
                await Conversation.SendAsync(activity, () => new MathsDialog());
            }
            else
            {
                HandleSystemMessage(activity);
            }
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }

        private Activity HandleSystemMessage(Activity message)
        {
            if (message.Type == ActivityTypes.DeleteUserData)
            {
                // Implement user deletion here
                // If we handle user deletion, return a real message
            }
            else if (message.Type == ActivityTypes.ConversationUpdate)
            {
                // Handle conversation state changes, like members being added and removed
                // Use Activity.MembersAdded and Activity.MembersRemoved and Activity.Action for info
                // Not available in all channels
            }
            else if (message.Type == ActivityTypes.ContactRelationUpdate)
            {
                // Handle add/remove from contact lists
                // Activity.From + Activity.Action represent what happened
            }
            else if (message.Type == ActivityTypes.Typing)
            {
                // Handle knowing tha the user is typing
            }
            else if (message.Type == ActivityTypes.Ping)
            {
            }

            return null;
        }
    }

    [Serializable]
    public class MathsDialog : IDialog<object>
    {
        // Bot Framework manages automatically persists per conversation data
        protected int number1 { get; set; }
        public async Task StartAsync(IDialogContext context)
        {

            context.Wait(MessageReceivedStart);
        }
        public async Task MessageReceivedStart(IDialogContext context, IAwaitable<IMessageActivity> argument)
        {
            await context.PostAsync("do you want to add, square root, or squared?");

            context.Wait(MessageReceivedOperationChoice);
        }

        public async Task MessageReceivedOperationChoice(IDialogContext context, IAwaitable<IMessageActivity> argument)
        {
            var message = await argument;

            if (message.Text.ToLower().Equals("add", StringComparison.InvariantCultureIgnoreCase))
            {
                await context.PostAsync("Provide number one:");
                context.Wait(MessageReceivedAddNumber1);
            }
            else if (message.Text.ToLower().Equals("square root", StringComparison.InvariantCultureIgnoreCase))
            {
                await context.PostAsync("Provide one number:");
                context.Wait(MessageReceivedSquareRoot);
            }
            else if (message.Text.ToLower().Equals("squared", StringComparison.InvariantCultureIgnoreCase))
            {
                await context.PostAsync("Provide one number:");
                context.Wait(MessageReceivedSquared);
            }
            else
            {
                context.Wait(MessageReceivedStart);
            }
        }

        public async Task MessageReceivedAddNumber1(IDialogContext context, IAwaitable<IMessageActivity> argument)
        {
            var numbers = await argument;
            // number one is persisted between messages automatically by bot framework dialog
            this.number1 = int.Parse(numbers.Text);
            await context.PostAsync("Provide number two:");

            context.Wait(MessageReceivedAddNumber2);
        }

        public async Task MessageReceivedAddNumber2(IDialogContext context, IAwaitable<IMessageActivity> argument)
        {
            var numbers = await argument;
            var number2 = int.Parse(numbers.Text);
            await context.PostAsync($"{this.number1} + {number2} is = {this.number1 + number2}");

            context.Wait(MessageReceivedStart);
        }

        public async Task MessageReceivedSquareRoot(IDialogContext context, IAwaitable<IMessageActivity> argument)
        {
            var number = await argument;
            var num = double.Parse(number.Text);

            await context.PostAsync($"square root of {num} is {Math.Sqrt(num)}");

            context.Wait(MessageReceivedStart);
        }

        public async Task MessageReceivedSquared(IDialogContext context, IAwaitable<IMessageActivity> argument)
        {
            var activity = await argument;
            var num = double.Parse(activity.Text);

            await context.PostAsync($"{num} squared is {num * num}");

            context.Wait(MessageReceivedStart);
        }
    }
}