import React, { useState, useEffect, useRef } from 'react';

import { Link } from "react-router-dom";

const About = () => {

    function goBack(ev) {
        window.history.back();
        ev.preventDefault();
    }

    return (
        <div>
            <h2>Pickering Rules Pusoy Dos</h2>
            <a href="#"
                onClick={goBack}>
                Back to game
            </a>

            <div>
                
        <p>
            Pusoy Dos is a simple card game where you try to
            play or <em>shed</em> all your cards before your opponents.
        </p>

        <p>
            All the cards are dealt equally between players.
            The player with the 3 clubs starts a round. The first move <strong>must</strong>
            include the 3 clubs.
        </p>

        <p>
            The round begins with a player laying a hand. A hand can be any of the following:
        </p>
        <ul>
            <li>Single - One card</li>
            <li>Pair -
              Two cards of the same rank.
              E.g. Two Clubs, Two Diamonds.
            </li>
            <li>Prial - 
                Three cards of the same rank. 
                E.g. Six Spades, Six Diamonds, Six Hearts
            </li>
            <li>Five card trick -
                5 cards that combine to become a poker hand
            </li>
        </ul>

        <p>
            The next player continues by playing the same class
            of hand, but of a higher value.
        </p>


        <p>To decide which card is higher, compare its rank and then suit.
            Card rank order starts at 3 with 2 being the highest. 
            In <strong>Pickering Rules</strong> (the ruleset implemented here)
            the order of suits is as follows: Clubs, Hearts, Diamonds, Spades.</p>


        <p>To decide which hand is higher, compare its highest card. In some 5 card tricks, 
            there is a primary set and a secondary set. In these hands you compare the highest
            card in the primary set. Eg. Queen Clubs Queen Hearts Queen Spades 2 Clubs 2 Spades 
            - the Qspades is the comparision card.</p>

        <p>Play continues until one person has shed all their cards. They are the winner. Play
            continues further until only one person has cards remaining. They are a loser.</p>

        <h4>Five Card Tricks</h4>

        <ul>
            <li><strong>Straight:</strong> 5 cards in sequential order</li>
            <li><strong>Flush:</strong> 5 cards of the same suit</li>
            <li><strong>Full House:</strong> 3 cards of one rank, 2 cards of another</li>
            <li><strong>Four of a Kind:</strong> 4 cards of one rank, one of another</li>
            <li><strong>Straight Flush:</strong> 5 cards of the same suit in sequential order</li>
        </ul>


        <h4>Reversals</h4>
        <p>When a player lays a <strong>Four of a Kind</strong> the order of card ranks
and suits are reversed. 3 Clubs becomes the highest card and 2 Spades the lowest.</p>
            </div>
        </div>
    );
}

export default About;
