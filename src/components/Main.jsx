import { useState, useEffect } from 'react';
import DisplaySelector from './DisplaySelector';
import KanbanBoard from './KanbanBoard';
import { useFetchData } from '../hooks/useFetchData';
import done from '../assets/Done.svg';
import todo from '../assets/To-do.svg';
import inProgress from '../assets/in-progress.svg';
import Backlog from '../assets/Backlog.svg';
import Cancelled from "../assets/Cancelled.svg";
import noPriority from "../assets/No-priority.svg";
import lowPriority from "../assets/Img - Low Priority.svg";
import mediumPriority from "../assets/Img - Medium Priority.svg";
import highPriority from "../assets/Img - High Priority.svg";
import urgentPriority from "../assets/SVG - Urgent Priority colour.svg";

const Main = () => {
  const { result, loading, error } = useFetchData();
  const [groupBy, setGroupBy] = useState("Status");
  const [sortBy, setSortBy] = useState("Priority");
  const [groupedData, setGroupedData] = useState([]);


  const getPriorityLabel = (priority) => {
    const labels = ['Lowest', 'Low', 'Medium', 'High', 'Highest'];
    return labels[priority];
  };

  const sortTickets = (ticketsToSort) => {
    return [...ticketsToSort].sort((a, b) => {
      if (sortBy === 'Priority') {
        const ticketA = result?.tickets?.find(t => t.id === a.cardId);
        const ticketB = result?.tickets?.find(t => t.id === b.cardId);
        return (ticketB?.priority ?? 0) - (ticketA?.priority ?? 0);
      }
      return (a.cardTitle ?? '').localeCompare(b.cardTitle ?? '');
    });
  };

  const imagefromStatus = {
    "Todo": todo,
    "Done": done,
    "In progress": inProgress,
    "Backlog": Backlog,
    "Cancelled": Cancelled
  };

  const imagefromPriority = {
    0: noPriority,
    1: lowPriority,
    2: mediumPriority,
    3: highPriority,
    4: urgentPriority
  }


  const transformTicket = (ticket) => ({
    cardId: ticket.id,
    cardTitle: ticket.title,
    featureRequest: ticket.tag[0],
    done: groupBy === "Status" ? null : imagefromStatus[ticket.status],
    statusBackGround: ticket.status === "In progress" ? "yellow" :
      ticket.status === "Todo" ? "red" : "green",
    dpName: result.users.find(user => user.id === ticket.userId)?.name?.substr(0, 2).toUpperCase() ?? 'Unknown',
    dots: imagefromPriority[ticket.priority],

  });


  const groupByStatus = () => {
    const grouped = [];
    let statuses = ["Todo", "In progress", "Done", "Backlog", "Cancelled"];
    statuses.forEach(status => {
      const tasks = result?.tickets.filter(ticket => ticket.status === status).map(transformTicket);
      grouped.push({
        colTitle: status,
        colImg: imagefromStatus[status],
        NumOfCards: tasks.length,
        tasks: sortTickets(tasks)
      });
    });
    return grouped;
  };

  const groupByPriority = () => {
    const grouped = [];
    let priorities = [4, 3, 2, 1, 0];
    priorities.forEach(priority => {
      const tasks = result?.tickets.filter(ticket => ticket.priority === priority).map(transformTicket);
      grouped.push({
        colTitle: getPriorityLabel(priority),
        colImg: imagefromPriority[priority],
        NumOfCards: tasks.length,
        tasks: sortTickets(tasks)
      });
    });
    return grouped;
  }

  const groupByUser = () => {
    const grouped = [];
    result.users.forEach(user => {
      const tasks = result?.tickets.filter(ticket => ticket.userId === user.id).map(transformTicket);
      grouped.push({
        colTitle: user.name,
        colImg: user.dp,
        NumOfCards: tasks.length,
        tasks: sortTickets(tasks)
      });
    });
    return grouped;
  };

  useEffect(() => {
    if (result && result.tickets) {
      if (groupBy === "Status") {
        const grouped = groupByStatus();
        setGroupedData(grouped);
      }
      else if (groupBy === "User") {
        const grouped = groupByUser();
        setGroupedData(grouped);
      }
      else {
        const grouped = groupByPriority();
        setGroupedData(grouped);
      }
    }
  }, [result, groupBy, sortBy]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div>
      <DisplaySelector
        groupBy={groupBy}
        setGrouping={setGroupBy}
        ordering={sortBy}
        setOrdering={setSortBy}
      />
      <KanbanBoard groupedData={groupedData} groupBy={groupBy} />
    </div>
  );
}

export default Main;
