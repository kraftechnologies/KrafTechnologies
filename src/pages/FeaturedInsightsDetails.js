import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react";
import { supabase } from "../services/supabaseClient";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedInsightsDetails = () => {
    const { id } = useParams();
    const [insight, setInsight] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchInsight = async () => {
        try {
            const { data, error } = await supabase
                .from('FeaturedInsights')
                .select('*')
                .eq('id', id)
                .single();
            
            if (error) {
                throw error;
            }
            setInsight(data);
        } catch (error) {
            console.error('Error fetching insight:', error);
            setError(error.message || "Failed to load insight.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInsight();
    }, [id]);

    if (loading) {
        return (
            <div className="relative bg-black min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-jost">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(24, 203, 150, 0.1) 1px, transparent 1px),
                                             linear-gradient(to bottom, rgba(24, 203, 150, 0.1) 1px, transparent 1px)`,
                            backgroundSize: "2rem 2rem",
                        }}
                    ></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-800 rounded mb-8 w-32"></div>
                        <div className="h-64 bg-gray-800 rounded mb-8"></div>
                        <div className="h-12 bg-gray-800 rounded mb-4"></div>
                        <div className="h-6 bg-gray-800 rounded mb-6 w-3/4"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-800 rounded"></div>
                            <div className="h-4 bg-gray-800 rounded"></div>
                            <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="relative bg-black min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-jost">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(24, 203, 150, 0.1) 1px, transparent 1px),
                                             linear-gradient(to bottom, rgba(24, 203, 150, 0.1) 1px, transparent 1px)`,
                            backgroundSize: "2rem 2rem",
                        }}
                    ></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center text-[#18CB96] hover:text-[#18CB96]/80 font-medium transition-colors duration-300 mb-8"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        
                    </Link>
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                </div>
            </div>
        );
    }

    if (!insight) {
        return (
            <div className="relative bg-black min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-jost">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(24, 203, 150, 0.1) 1px, transparent 1px),
                                             linear-gradient(to bottom, rgba(24, 203, 150, 0.1) 1px, transparent 1px)`,
                            backgroundSize: "2rem 2rem",
                        }}
                    ></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        to="/featured-insights"
                        className="inline-flex items-center text-[#18CB96] hover:text-[#18CB96]/80 font-medium transition-colors duration-300 mb-8"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Insights
                    </Link>
                    <div className="text-center text-gray-300">
                        <h2 className="text-2xl font-medium mb-4">Insight not found</h2>
                        <p>The requested insight could not be found.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative bg-black min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-jost">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(24, 203, 150, 0.1) 1px, transparent 1px),
                                         linear-gradient(to bottom, rgba(24, 203, 150, 0.1) 1px, transparent 1px)`,
                        backgroundSize: "2rem 2rem",
                    }}
                ></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center text-[#18CB96] hover:text-[#18CB96]/80 font-medium transition-colors duration-300 mb-8"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Insights
                    </Link>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900/70 backdrop-blur-md border border-[#18CB96]/30 rounded-xl overflow-hidden"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(24, 203, 150, 0.15), rgba(0, 0, 0, 0.9))",
                    }}
                >
                    {/* Hero Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                            src={insight.image || "/placeholder.jpg"}
                            alt={insight.title || "Insight Image"}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-6 left-6">
                            <span className="px-4 py-2 bg-[#18CB96]/90 rounded-full text-sm font-medium text-white">
                                {insight.category || "General"}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <motion.h1
                            className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {insight.title || "Untitled Insight"}
                        </motion.h1>

                        {/* Meta Information */}
                        <motion.div
                            className="flex flex-wrap items-center gap-6 mb-8 text-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-2 text-[#18CB96]" />
                                <span className="text-sm font-medium">
                                    {insight.authorName || "Anonymous"}
                                </span>
                            </div>
                            {insight.publishedDate && (
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-[#18CB96]" />
                                    <span className="text-sm">
                                        {new Date(insight.publishedDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                            )}
                            {insight.readTime && (
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2 text-[#18CB96]" />
                                    <span className="text-sm">{insight.readTime} min read</span>
                                </div>
                            )}
                        </motion.div>

                        {/* Description/Summary */}
                        {insight.description && (
                            <motion.div
                                className="mb-8 p-6 bg-gray-800/50 border border-[#18CB96]/20 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <p className="text-gray-300 text-lg leading-relaxed italic">
                                    {insight.description}
                                </p>
                            </motion.div>
                        )}

                        {/* Main Content */}
                        <motion.div
                            className="prose prose-invert prose-lg max-w-none"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <div className="text-gray-300 leading-relaxed space-y-6">
                                {insight.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: insight.content }} />
                                ) : (
                                    <div>
                                        <p className="mb-6">
                                            This insight explores the latest developments in technology and innovation, 
                                            providing valuable perspectives on how businesses can leverage these advancements 
                                            to drive growth and success.
                                        </p>
                                        <p className="mb-6">
                                            At Kraf Technologies, we believe in the power of technology to transform 
                                            businesses and create meaningful impact. Our insights are designed to help 
                                            you stay ahead of the curve and make informed decisions about your technology 
                                            investments.
                                        </p>
                                        <p>
                                            Whether you're looking to implement new solutions, optimize existing processes, 
                                            or explore emerging technologies, our team of experts is here to guide you 
                                            through every step of your digital transformation journey.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Tags */}
                        {insight.tags && insight.tags.length > 0 && (
                            <motion.div
                                className="mt-12 pt-8 border-t border-[#18CB96]/20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <div className="flex items-center mb-4">
                                    <Tag className="w-5 h-5 mr-2 text-[#18CB96]" />
                                    <span className="text-gray-300 font-medium">Tags</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {insight.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-[#18CB96]/20 border border-[#18CB96]/30 rounded-full text-sm text-[#18CB96] hover:bg-[#18CB96]/30 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Author Info */}
                        <motion.div
                            className="mt-12 pt-8 border-t border-[#18CB96]/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full mr-4 border-2 border-[#18CB96]/50 flex items-center justify-center bg-gray-800 text-white text-xl font-medium">
                                    {insight.authorName?.charAt(0) || "A"}
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-lg">
                                        {insight.authorName || "Anonymous"}
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        {insight.authorBio || "Writer at Kraf Technologies"}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.article>
            </div>
        </div>
    );
};

export default FeaturedInsightsDetails;